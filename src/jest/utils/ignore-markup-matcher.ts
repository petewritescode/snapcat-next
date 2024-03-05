export const ignoreMarkupMatcher =
  (text: string) => (_content: string, element: Element | null) => {
    const elementHasText = element?.textContent === text;
    const childHasText = Array.from(element?.children ?? []).some(
      (child) => child.textContent === text,
    );

    return Boolean(elementHasText && !childHasText);
  };
