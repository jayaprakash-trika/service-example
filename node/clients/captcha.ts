import type { InstanceOptions, IOContext } from '@vtex/api'
import { Apps, ExternalClient } from '@vtex/api'




export default class Captcha extends ExternalClient {
  private setting?: any;

  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://httpstat.us', context, options)
  }

  public async getCaptcha() {
    const App = new Apps(this.context)
    this.setting = await App.getAppSettings(process.env.VTEX_APP_ID ?? '')

    return {
      siteKey: this.setting?.recaptchaKey
    }
  }
}


