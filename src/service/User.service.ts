/**
 * @author rajan
 * @description 用户相关逻辑
 */
import BasicService from "@/service/Basic.service"
import { UserServiceInterface } from "@/interface/service/User.service.interface"

class UserService extends BasicService implements UserServiceInterface {
    
    private userInfo: any = null;// 用户信息缓存

    /**
     * 较多的注释
     */
    private otherInfo:any = null;

    /**
     * @name  测试方法
     * @param t  测试参数
     * @description 此方法为测试方法，返回一个固定的字符串
     */
    async test(t?: string): Promise<string> {
        return "User.service.test"
    }


    


}
export default new UserService();