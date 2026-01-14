/**
 * Smooth scroll to a section by ID with navbar offset
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param offset - Additional offset in pixels (default: 80 for navbar height)
 */
export function smoothScrollToSection(sectionId: string, offset: number = 80) {
    const element = document.getElementById(sectionId);

    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
}

/**
 * Handle navigation link click with smooth scroll
 */
export function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
) {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    smoothScrollToSection(sectionId);
}
