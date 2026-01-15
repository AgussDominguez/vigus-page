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
      behavior: 'smooth',
    });
  }
}

/**
 * Handle navigation link click with smooth scroll
 */
export function handleNavClick(e: React.MouseEvent<HTMLElement>, href: string) {
  const isHomePage = window.location.pathname === '/';
  const isAnchor = href.includes('#');

  if (isHomePage && isAnchor) {
    e.preventDefault();
    const sectionId = href.split('#')[1];
    smoothScrollToSection(sectionId);
  }
  // If not on home page, allow normal link behavior (navigating to home with anchor)
}
