export const useBackground = () => {
  const background = (name) => ({
    '--desktop-bg': `url("/images/${name}.webp")`,
    '--mobile-bg': `url("/images/${name}-mobile.webp")`,
  })

  return {
    background,
  }
}