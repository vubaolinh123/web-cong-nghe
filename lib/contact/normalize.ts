import { ContactFormData, initialContactFormData } from "@/lib/validations/contact";

type UnknownRecord = Record<string, unknown>;

const asString = (value: unknown): string => (typeof value === "string" ? value : "");

export const normalizeContactFormPayload = (input: unknown): ContactFormData => {
  const body = (input && typeof input === "object" ? input : {}) as UnknownRecord;

  const specificServices = Array.isArray(body.specificServices)
    ? body.specificServices.filter((item): item is string => typeof item === "string")
    : [];

  return {
    ...initialContactFormData,
    name: asString(body.name),
    jobTitle: asString(body.jobTitle),
    phone: asString(body.phone),
    fanpageOrWebsite: asString(body.fanpageOrWebsite),
    budget: asString(body.budget),
    serviceCategory: asString(body.serviceCategory),
    specificServices,
    message: asString(body.message),
  };
};
