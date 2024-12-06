export async function wait(time: number) {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, time)
  })
}
