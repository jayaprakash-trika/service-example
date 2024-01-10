export async function getCaptchaData(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { captcha },
  } = ctx

  const data = await captcha.getCaptcha()
  ctx.body = data
  await next()
}
