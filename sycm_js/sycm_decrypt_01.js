/*
    使用crypto-js包实现生意参谋市场加密数据data的解密
*/
const CryptoJS = require('crypto-js');
function decrpt(data) {
    let secret = CryptoJS.enc.Utf8.parse('w28Cz694s63kBYk4');
    let iv = CryptoJS.enc.Utf8.parse("4kYBk36s496zC82w");

    let res = CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(data)), secret, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    let res_data = CryptoJS.enc.Utf8.stringify(res);
    return res_data
}

let data = '978A6CAB053F0786DA3FDCE8F4A06FE6895A1A3EA8D6672965D1FC9791E64B138B56B3376309B34D9F67AA46FD278C00E1CF539F07D1BA3FD9394B1FACCE3436567DC826A11E43CF4C5921C03BA7D14C6DA8F8393C42A9FA81A449AE3D644D11B8CC331735C462524677EBBE81800EE7BD06B57964E750702EA472DE90DA8CD97B28686953899B47C8C85B18BF31C473AEC234A32972BC43BA720EDD04707D1189782AE13BF3A01CA6B1553F496F91B9C063944D522C59A192DC66552FF477EECB6B81FDDA49413A5A75F193FC40E37E1517876C0635A782B664823B9564260EF4F976F12E3AC715EB5B037DB7061796EC76E4573EC0BC5673F003156064A8EBC018BD4DB97641E767A297B9B8B6C6E233035B0EAFDB2726624C9B91F80A3333AF28EA8A95773138C699A5080F1DC69E93FAEBFEC2E02737CFBF3D353A4426A3E2249E563A737FFB82594E8ABD71B4C9F373DA401036132DC8AE3323C151411AB8F8A124C2FA2B4B4D5F8716174412878625C49AF25671E954D6F2BD5A5CC804311525C832D80DB92CBBB3B110EF86635B8C023AE322A33883BD4BC762E13A5C963CF19C1F74195C8221B57963ECFBFDB2FB3BEF3A8D0342740B1DFE5C30A2DCAF2615B57D3C0BA1A3FCD0A2298CA08BBE11E2F0C5DFDBF9F5F40C5FF9EF1A34AF11BAB706EB6829378D6C57F6CA4F75';
res_data = decrpt(data);
console.log(res_data);