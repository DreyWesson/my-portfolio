import assignProps from "./assignProps";
export default function () {
    const defaultProps = {
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        distance: "30px",
        duration: 1000,
        desktop: true,
        mobile: true,
    };

    /* Section Title */
    ScrollReveal().reveal(
        ".section-title",
        assignProps(
            {
                delay: 300,
                distance: "0px",
                origin: "bottom",
            },
            defaultProps
        )
    );

    /* Hero Section */
    ScrollReveal().reveal(
        ".hero-title",
        assignProps(
            {
                delay: 800,
                origin: "bottom",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".puzzle-leftgrp1",
        assignProps(
            {
                delay: 500,
                distance: "50px",
                origin: "left",
            },
            defaultProps
        )
    );
    ScrollReveal().reveal(
        ".puzzle-leftgrp2",
        assignProps(
            {
                delay: 600,
                distance: "80px",
                origin: "left",
            },
            defaultProps
        )
    );
    ScrollReveal().reveal(
        ".puzzle-rightgrp2",
        assignProps(
            {
                delay: 600,
                distance: "80px",
                origin: "right",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".puzzle-leftgrp3",
        assignProps(
            {
                delay: 700,
                distance: "160px",
                origin: "left",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".puzzle-leftgrp4",
        assignProps(
            {
                delay: 800,
                distance: "300px",
                origin: "left",
            },
            defaultProps
        )
    );
    ScrollReveal().reveal(
        ".puzzle-rightgrp4",
        assignProps(
            {
                delay: 800,
                distance: "300px",
                origin: "right",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".pivot",
        assignProps(
            {
                delay: 800,
                distance: "300px",
                origin: "top",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".hero-cta",
        assignProps(
            {
                delay: 800,
                distance: "120px",
                origin: "bottom",
            },
            defaultProps
        )
    );

    /* About Section */
    ScrollReveal().reveal(
        ".about-wrapper__image",
        assignProps(
            {
                delay: 600,
                origin: "bottom",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".about-tabs",
        assignProps(
            {
                delay: 1000,
                origin: "bottom",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".about-wrapper__info",
        assignProps(
            {
                delay: 1000,
                origin: window.innerWidth > 768 ? "left" : "bottom",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".frontend-left",
        assignProps(
            {
                delay: 1000,
                origin: window.innerWidth > 768 ? "bottom" : "left",
            },
            defaultProps
        )
    );
    ScrollReveal().reveal(
        ".frontend-right",
        assignProps(
            {
                delay: 1000,
                origin: window.innerWidth > 768 ? "bottom" : "right",
            },
            defaultProps
        )
    );

    /* Projects Section */
    ScrollReveal().reveal(
        ".project-wrapper__text",
        assignProps(
            {
                delay: 500,
                origin: window.innerWidth > 768 ? "left" : "bottom",
            },
            defaultProps
        )
    );

    ScrollReveal().reveal(
        ".project-wrapper__image",
        assignProps(
            {
                delay: 1000,
                origin: window.innerWidth > 768 ? "right" : "bottom",
            },
            defaultProps
        )
    );

    /* Contact Section */
    ScrollReveal().reveal(
        ".contact-wrapper",
        assignProps(
            {
                delay: 800,
                origin: "bottom",
            },
            defaultProps
        )
    );
}
