## Visual Testing

### Getting started

The first execution of a visual test will give you an error, as it needs to generate a baseline first. After running the tests a second time it will compare against your baseline.

### Example

In this example we are comparing to our baseline and expecting a exact match.

```
test('should match homepage screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot();
});
```

We can control the thresholds of these comparisons by defining the pixel difference as a number or ratio (between 0 and 1)

```
await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.2 }); 
```

We can also run content based comparisons, between selectors and text files.

```
expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
}
```


