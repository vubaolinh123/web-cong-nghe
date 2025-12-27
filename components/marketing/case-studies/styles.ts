// CSS styles for Case Studies components
export const caseStudiesStyles = `
    .case-studies-swiper {
        padding: 12px 12px 45px 12px;
    }

    .case-studies-swiper .swiper-button-next,
    .case-studies-swiper .swiper-button-prev {
        color: #22c55e;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(8px);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid rgba(34, 197, 94, 0.3);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .case-studies-swiper .swiper-button-next:hover,
    .case-studies-swiper .swiper-button-prev:hover {
        background: rgba(34, 197, 94, 0.2);
        border-color: rgba(34, 197, 94, 0.8);
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
    }

    .case-studies-swiper .swiper-button-next::after,
    .case-studies-swiper .swiper-button-prev::after {
        font-size: 18px;
        font-weight: bold;
    }

    .case-studies-swiper .swiper-pagination {
        bottom: 12px;
    }

    .case-studies-swiper .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: rgba(148, 163, 184, 0.5);
        opacity: 1;
        transition: all 0.3s ease;
    }

    .case-studies-swiper .swiper-pagination-bullet-active {
        background: #22c55e;
        width: 24px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
    }

    @media (max-width: 640px) {
        .case-studies-swiper {
            padding: 8px 6px 40px 6px;
        }

        .case-studies-swiper .swiper-button-next,
        .case-studies-swiper .swiper-button-prev {
            width: 32px;
            height: 32px;
        }

        .case-studies-swiper .swiper-button-next::after,
        .case-studies-swiper .swiper-button-prev::after {
            font-size: 12px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .case-studies-swiper .swiper-slide {
            transition: none;
        }
    }

    /* Group Featured Projects Swiper */
    .group-featured-swiper {
        padding: 20px 10px 50px 10px;
    }

    .group-featured-swiper .swiper-button-next,
    .group-featured-swiper .swiper-button-prev {
        color: #06b6d4;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(8px);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 2px solid rgba(6, 182, 212, 0.3);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .group-featured-swiper .swiper-button-next:hover,
    .group-featured-swiper .swiper-button-prev:hover {
        background: rgba(6, 182, 212, 0.2);
        border-color: rgba(6, 182, 212, 0.8);
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
    }

    .group-featured-swiper .swiper-button-next::after,
    .group-featured-swiper .swiper-button-prev::after {
        font-size: 16px;
        font-weight: bold;
    }

    .group-featured-swiper .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: rgba(148, 163, 184, 0.5);
        opacity: 1;
        transition: all 0.3s ease;
    }

    .group-featured-swiper .swiper-pagination-bullet-active {
        background: #06b6d4;
        width: 24px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
    }

    @media (max-width: 640px) {
        .group-featured-swiper {
            padding: 10px 0 45px 0;
        }

        .group-featured-swiper .swiper-button-next,
        .group-featured-swiper .swiper-button-prev {
            width: 32px;
            height: 32px;
        }

        .group-featured-swiper .swiper-button-next::after,
        .group-featured-swiper .swiper-button-prev::after {
            font-size: 12px;
        }
    }

    /* TikTok Featured Projects Swiper */
    .tiktok-featured-swiper {
        padding: 20px 10px 50px 10px;
    }

    .tiktok-featured-swiper .swiper-button-next,
    .tiktok-featured-swiper .swiper-button-prev {
        color: #f97316;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(8px);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid rgba(249, 115, 22, 0.3);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .tiktok-featured-swiper .swiper-button-next:hover,
    .tiktok-featured-swiper .swiper-button-prev:hover {
        background: rgba(249, 115, 22, 0.2);
        border-color: rgba(249, 115, 22, 0.8);
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
    }

    .tiktok-featured-swiper .swiper-button-next::after,
    .tiktok-featured-swiper .swiper-button-prev::after {
        font-size: 14px;
        font-weight: bold;
    }

    .tiktok-featured-swiper .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: rgba(148, 163, 184, 0.5);
        opacity: 1;
        transition: all 0.3s ease;
    }

    .tiktok-featured-swiper .swiper-pagination-bullet-active {
        background: #f97316;
        width: 24px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
    }

    @media (max-width: 640px) {
        .tiktok-featured-swiper {
            padding: 10px 0 45px 0;
        }

        .tiktok-featured-swiper .swiper-button-next,
        .tiktok-featured-swiper .swiper-button-prev {
            width: 32px;
            height: 32px;
        }

        .tiktok-featured-swiper .swiper-button-next::after,
        .tiktok-featured-swiper .swiper-button-prev::after {
            font-size: 12px;
        }
    }

    /* Continuous Swiper - Marquee Effect */
    .continuous-swiper .swiper-wrapper {
        transition-timing-function: linear !important;
    }

    /* Featured Projects Swiper */
    .featured-projects-swiper .swiper-button-next,
    .featured-projects-swiper .swiper-button-prev {
        color: #22c55e;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(8px);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid rgba(34, 197, 94, 0.3);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .featured-projects-swiper .swiper-button-next:hover,
    .featured-projects-swiper .swiper-button-prev:hover {
        background: rgba(34, 197, 94, 0.2);
        border-color: rgba(34, 197, 94, 0.8);
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
    }

    .featured-projects-swiper .swiper-button-next::after,
    .featured-projects-swiper .swiper-button-prev::after {
        font-size: 18px;
        font-weight: bold;
    }

    .featured-projects-swiper .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: rgba(148, 163, 184, 0.5);
        opacity: 1;
        transition: all 0.3s ease;
    }

    .featured-projects-swiper .swiper-pagination-bullet-active {
        background: #22c55e;
        width: 24px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
    }
`;
