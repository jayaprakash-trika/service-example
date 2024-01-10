import { IOClients } from '@vtex/api'

import Status from './status'
import Captcha from './captcha'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get captcha() {
    return this.getOrSet('captcha', Captcha)
  }
}
