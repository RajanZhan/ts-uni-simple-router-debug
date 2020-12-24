import * as bcc from "@/common/js/base-cloud-client.js" 
import { Vue } from "vue-property-decorator";

export default class BaseComponent extends Vue {
    public bcc = bcc.default; // 云函数调用

    protected $enventBus:any; // 事件总线
}