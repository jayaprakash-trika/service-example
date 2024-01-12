import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient, Apps } from '@vtex/api'

export default class Student extends ExternalClient {
    private setting: any | boolean = false
    constructor(context: IOContext, options?: InstanceOptions) {
        super(`http://trika.vtexcommercestable.com.br`, context, {
            ...options,
        })
    }


    public async getStudentData() {
        const customerData = await this.http.get<Promise<any>>(
            `/api/dataentities/JS/Search`,
            await this.getHeaders()
        )
        return customerData
    }

    public async createStudentData(payload: any) {
        const savedData = await this.http.post<Promise<any>>(
            `/api/dataentities/JS/documents`, payload,
            await this.getHeaders()
        )
        console.log("saved" + savedData)
        if (savedData) {
            return {
                success: true,
                data: savedData
            }
        } else {
            return savedData
        }
    }

    private async getHeaders() {
        const App = new Apps(this.context)
        this.setting = await App.getAppSettings(process.env.VTEX_APP_ID ?? '')
        return {
            headers: {
                'Content-type': 'application/json',
                'X-VTEX-API-AppKey': this.setting?.apiKey,
                'X-VTEX-API-AppToken': this.setting?.appToken
            }
        }
    }
}
