/*
    使用crypto-js包实现生意参谋市场加密数据data的解密
*/
const CryptoJS = require('crypto-js');

let data = '70BBF29AB4ECC64C1BA001A5095CC323266FED53C26309D1C5E26349B075D03F7B58D3FD69C032482DBDC500665FD4AD6A51F9A2CDF2E98AFAB7FEC30F494FC7037FB5C0F0EB0A25ED9453CB2427DD6DCA808F4D85F46639BB71A3EB3D82D9B123A1635BF88D2D0D87641260979175D7F247147F14191041E7D516AB940DB5864E1482DE14E4EF246D7D7063779E47307C305868B67DE411293A4C430228EF567B13E9B956A32E291F357F399DD4F350ACD2E822F38DDF46266867690AE4C97122B0A51E386DFF2FAFF46D78AC9D1E8AA4913D3647A8125057C6B8A2054616E5FC1A7EAD1D9AA83180DD13A87E95EF4921DC696983B1858FD9314A04CBF4A846E6E3703ACA7339E061E8297F527065032E62B221FEC34E036C08DEA569324E3324733AF1A01E716EBF09A08CFF4642766C6F0BE4D7E3E87D8BDB8BE15596BEA1715570E0579065C5E74853E30B84C4564779335C16688D2E2231ECFB0B4667AF2CFA8A93A64D507D9771E77FADD58EEB48C66E9C383AFB7DFE9AD6673D7A7184598463A2A74E9B9FC05850F44494D1224C8892BF2C411F6F21EC300884C42F9A0DCEE4843F058591D344BD33B4CE851D92BED7590E81C3E2CF915FA87092D19DA05C87747EB659F3103A5C60C8F4B44FCA7E823FAF775D82E18D18DCF5EF949965879B762BD445A79456636C9B48E3586358DEA645B6F64056270260101EEA6C4579286D0948C89EDB2E76898C984031AAD708E87BC3300C72C71D6802999F188E59DD1461EB780110548B4DDA6E08E5CE24B85ED3CA7D2A988273EF46690331B1D9AF06A0726469DD679C6F6C9B1162D7A6A3ECE6FF9146491C587802FB8BA6BD4EC7F73450A318C565860FCF8556FBF0547DF425C40026AEED7AADA066CD96AD69EDB499EB1A75DC8B66C74A2D190D28B300142BE7BB469FFCACF2D73DCBE4547FDDC798B6D1423EAF9BB5911D4C4CCC6368BBF62CC11CB9BEEC8550328F8B69D3FC245CB14FC39164EA5B2A1827AAADC58B779C39559BCFF6BB5925A73D77EEEBE53AD51AAC95BD1CEB5C44DA2BDB9263DEF440E1E28B604D6ED2789B08B60FCD2C46382D1841562422AEB04C1488D0389713D6D99F56AA34422EC93382072230E88F131B92DD8DAB165FDD15B1D1702AC5F46BF0B988CF1E1856C00530BC55FAD1776FE23DE7297835A77F984924063DE40182F583FC11368FE43C4B7EF773867F01E186CB9247D7838F81350103E3C29F0044733E8C608B9C4D20D65E650084BC6232EA006C9CE3F5F82285B9F34221F888BFF78FADD0BA8B595DAFE1A4490E6F06F4B916F6626FE189AEC0FF2F2BFE3B2E7417432BDDFD8CB54403516070460391CF928AC4BE6BE2682CB2B46035CCA78C7C453F39BAB39F9BE2724BD21FFD624EF6259113E389A82EC7DD1C239D15C536C539278B2DA5C2E2D95962904C0EFAF0C17EA6FB97BF6608409E06615E4161E4507EED3AF61AD32855E086402215FE27F012811B34214640E1451345851CCB0B2DC9ED91EAF4E1DCAA15DBC8D5EBF27F12A2A7321D201BEC1C8101E274F3643677F54115C545C99EA1DA53D6E2A7B76C232AE24ADA3458BE5F518327D085FF75E796B136AE46EE58605842B53BCA45F899758B53904E9146653B0C964B2AE7F1FD9E9B43F191556BFE4760571A22B004686E2E1B1F83635044528E7343058D00FF9D7F58651962D2457226232D32C9C2999066E21A453C53B59B4BD478A0AD4B6E63B75B46C34EF46A4C4F98DCAB71EA9E47103269E3887DAA1151536DA4C925EB474CDD33B68CB4A3A54A938B3C17A3D1B5F6AAD0AE7AE89C564FD0746E48FF79E5072EF18486F9BDEC954713903EB5022A905A77E22EF2B44750917AE6F3ED033171F8725AB73970DC0C5F0B4C51809B7EF47BB3653127D88C334641EC7BFACC552412CA7C17971E0B817BCAF6FFA40DC2DB096A7F11C3DCA8F903FC44A30497FBD7CBA3967AB4AA2ED029721FFC671A04FF10E9E545094C993695C5B6F4FEFD2C655F9DF076323A3231F97EF5A3ECE56F9547A40BE9131E5B1C85C127F7C4137C28B5B52BA0D481A3FC6BA2048DE3E3735843D6B368041134338559184690DA0AFE22798D1DA2DAC182F29901DD33A1E7F8605D696857D75F232B713AE448F6E167870A3D23B15A918FADBE182089FB1D5062BBD47D6B711BEA9AAAD73B44E9E0852AB10CC622DEE8656B0A103C749C794D71CBDDD9F622F930F6223C8CD06102EA0006F8A2661876880F435E35A54AE1E3DB40C0AD5373E033400AA6F560A72C951522C775BD6F4B311F138CE361DE5318649B857206B1413982FEBB2D55E52375345F73DA8990B0DB1C2FFB913918DC0EFC3C1C49129F35267F8E77A17A07EF5EA4D2AA17A533CD12A7D501B6BED7771E294FA39AB42F516BB18150D88F5BB1C75CEC6FFF4877571BD1E8B17F8AAF1037717F5754BC61C8E82AE235B85AF7CEA3BF5282895F1AD548048CBBE890350306A8E7705DB98DC9D5AB20235CB10586814C56BC5478EE79481443360FCCE8704147925F6B1F7FF58B16F121F3644166F20468AD5C42DF56757640A520AACF6D5E72C3B1DF5F5D9E294EA0C0B6E6881922C70937E8BE76A7AC817C613349CA70C0AAA149F9E1C8A4A71AE1BA6F6CF543F60DEA8566776EA42BF2F19AA0F948201442578272A89B4E5F675B5816FB35058E579C87F26694EFA6E87F69D3C5B7F5804CBB16A59C4E5CC41C7F7AC8407C207B52CC9D4359B9CBE47102C9F43D35CBDB2A35712B4B30B23B15DE6B835C37AA3772ABF879FA0BA08D91DEE08DA80FCB0EDD6356F7037E00269FE1AE3A91C2C9C575FD2911DE3499A06FA2478BA9D9641453F78F0CC5B932FFA23E992FA76A3BB570418055F47BDB55129AF153ACAD7F9FD73D39DE13280472762DA7230A2580262D15E6CF6F2695F03F52EB43CD3E7F707BF0CC35447E07740637528A0CBEE5397F92AE43EE03BFEB1B576E78DA91F581F3A11FCC26829212A9626ACB2E700ADA3F7EBB8FCCA6FFFFBF143C7AE03FEF3126DD28ABCE8BDF3B53FD61D4DA9B528590631BB456E84C5BD16B854CA6462BEA501DAD87962595A49875F6CE28285671BD1DA2A9C1447067CD4168146204D95ABB743CA8BEF0BC151AAA37406836CE5907694E80078FB8940EA4CB3C8B5AB19704B758414AE58F0D96A538FAF17112044E674710FA2D519501F34AF72176994547D3626FA7D9846D027AF537B12AB8A0E7DF5962968C325553B7F5E0F880374D3F4F7551A121A58EDAA1E1A8D293891E5E0672ADCCF5E42118216C05C1061A315E37311C215FFB20943CC00F22FC0F96FB2377DD902E4C9F06197D3E9C6028608B70EDCFDF1A312BCED7AE5BC92556ECF57188F88C1ADD584C97D286F0895C4E809EFB865890C95161F664AD829A99C6262BE7CB63A11FF804BCD6935A356BEC1E5F697107CCB556CDB10453C67600D35546A486352016068880B93D86DD2A1C76DD93CE45461406C2C3A3420BF63E3D9F00BD91CEAC8A066B7145BD6056DBF9B250E86C43C8D6606ACE18147BA819BA058492A8D3D903D36B6EF70161C6270C97F7DDBE8AE9B5EB67543764A00155D03701D3D57F637CAC35E2EDD8742A557561784ED696BD3C3ABE75CB27C896AF26D9C3BA0EBE982C4E177905DC94AE8856DF26F943D1003E1AA13D12240F1239C2BAC6B32566C0C6C29598EFE357CBB54E1F41C9F5B8E59E9D718E149134B1D95DC225C3C6AFD596335A85EFACAD0C3E59D2C12655988132AB70D3F1F7AB3D2D231C9CC3A2B98A7D549CE7A2B79852F593ABA52059FE3FE257A898B68E194E816237F8C5B3251C54D5F09316BC939C94F9AF2F6E560E397BB6FD88F702EC6E25E2F7F2FF5CD95A048C9B0534CDEAB9CC899CA151EACF82FC6F61998E495E309189824E90B4BE5EEA2A583848792045F0EA13210E6C807CBDA92A89AFADADB70E69E913C8C6D8354BE14F913A5B79DFAD196D7CAD1302E3526B15CB4BBBEE9DE5CBFBC067B51D96CE8BDFC3E426178F7475AE9F79505824CC19C037A947B71FE3A36420F680E7BB4D3E1B2170877995C899D2FD0293D7B79387CD69D83461E4FAF5BE4EDA8E0B14DD920B90C483CCD1E20AB6682A650A1B19F53ECACFDFC4C9EC6E22890380EB66A6BEAA09E68962BE3AC99CE9153740055C84F5A06D38D640551B20B54146FA4218F705CE09D8CFA5FDF32D00BEAA7AA3839FD52E3515892754F72B8654A967CBE38F8E3B5A3FE48CE8FBB5A8BB04C899D8F41A204A340986E1341DF6A8ED38C3CA78ACA8449B00BC1C6AE46A3D28E829D7F632671E1FDC6D6C2548207991E05AB947B502C383642B972539D8E20D8F8FF50501A7BD51EA3669D9E646A2AA83D8CA16488930C5AF8B88C547122BEDDBB8520E9ACBA9CBA0E83C793DCB4CC7C45473D4C47FEC0C6D90ED1543EB4656146A261CA98AFA4300BC07CB4BF39FBF6D6E9A48731CB101616DDAD262CC5D0A0E5FBA04E11CEEA2EF92C42D7B00517F61CF0CAA794FB40A83FF1B2FBA2BB8B4FB74998FE5AEB3197793084F60067F00411904F5D81ED75A2E586AB5E5F6AEA4B5B16CF6CE703327FCB658EFB62B62B56FBE54873472239BF349B219561AD2AE99BE832DD8668518DA4364E6CCE61A58FCFD045003E46D31CBFD346B9F9940275718CA19C036C3E6DBEAC249393980D31A6C48DE0BA62EDEBFD973E161932729ECB7E48D78EE1D58F8F45E84AE0D9CB2009945F8977E561944DE317F1B87A828E795B0D4AB97661979313E7A772353DB3CBCE9A7A1AB77DA1A3F337F370F9D9A57F78CDBA9E548A7E4A1DF2ADCE5A77D655DBA8C41FDC3034B6B516B94816CF4042F8D0A08A3E53E441684FBBDE10AC7BFA6F987A26A6BE64F353F76DB508DCCB466DE41AD9E62B3F885B432A15F8F650E5B2093867C87CF2DDAEDF87BDD5BC0EC796E859E500E58DF1858773BEE1CC5A50F518934A27F616C2570EF9CD41F5A3B7961F40215710BABF6CFB1D964260E09889FA11CFD07C089372B24683DD27F409B6B096F002160773D5CB394873D162DBCFD1F45248595703C4AABBE20C0AA058F1ABE1444F317DF21CA22598BD90F09B0F2236D1DBE83BA5A15DD90F567A350DB55C945730ACCFD1266E9CA460B216B3AC356A057E34A494D3794785A360D285AA210D9F8CC8836165A728904BB7C1C2BD72C486EB109322418B2518A7D5AB30CC751598A999639D37FDB66CB508BDF7F862E8618C4C845CCBD01605DF92CB809C5957E07C9D3254DFB0915659D2F492B84C048A984A03E42C23EAD9E92EE8BB75880E497785CA49161707AE2904260EF8DBF254801ED9B63BC972299C675E0C90D59499D2CC11C6B634A5CB9737271C6922D902C20B3C6AC405370096F646179735559E70889586575F4B64484503B39AC6515231CCD4A653D7A34483AC1897079BA1B722381B44195823BA99A03EC92F256BBE331E86D0EDBEC030165C7EF7767249025A003C253C6AE484C31AFA20271C861EF5F80787B9611F67F3A36F5C2659A4B93E34E5FB09BDD98FEF476677EE9C3E4ADF166F308A45DCC98CC41B5EA1EE6FA60DBDF17C0D849DFBE9158201911F8815E959150EAFF7C09D78AEEBCC82D49BA6C104E6B739DE26BDC92F7908D3A866DC4FDB7C58256EB83BC5EF9FC354D3BE40198973871914E7F73E2F1BB3A6DBAAEBCA17E37213F183582B500F12C2DB1F6EFA31AA546C1E0A9D70E673261164365AEE04CBBABC867B24A82FF8E2AEFF2573C14F98D46C033EDFDAFB977CC40DFEBEE8D1B30C952BDC45DF62DCC1A188AB89D968B57EE22A785E7EC83618E19E7D6D4BAD966E8316D94FCE2D4405B0A4C844127CD224A06E4911C8733FDEE0A0C35B102C8BFADB942ED03992AB555567801590A57A804137BECD12F70C82AD131B4D9A20694E75258E18AE801567A07B6C2634CC8FB872C31DB8B92F3C325D1EB20F2A9ED4CD272B60719B1AA568CF66F48E0011CF82028713C5CD4EDF7AF8FC0A730DDC5414669158CA11F90B896FEAF270239F7A0F12124732F8C066FFCC302E5A34500254D3AC655FD6E0C8FA9A469D294676F9F4AC758E3E04AF573DC852C2326F4C29300CC5F0CB243DEBC09E2AE78BD11ED6884D3A9B56C809B7AE1D8C5C699E3EF2719CBE7D1E0FDDBA80EDD45F0338F5642552A3E92760805DED94C8F08051E01A97566A2BCA16DABFF73A0F4DA1EDD0E31C2610C3EF96E44A09C26548497C7073945A94FF1D56C2AAF2B24E55BA63C40C175FB9F9B19D84B05609B3BBBC26E03CE304D037D5EC5974A944701EFE4A405F84C6430F038A7038E9D5F177A0B937315A2909CCACFCDC4D0FAED6D9935157903209D5E097E26D06538A4AA95B6E71E4C9455FF7079036EBA924FC581259B434E757AB73F1B69C29750A2806338A365C9ECA5DAF157D4ED41DAECF7487FFBAB83312B1DABB830DF41F3C6F7F1ED39A85255CB8214A13FEB9F41207BA1102D53FFDA26B621A5394C5E3A3AF05A1A3341ED9150E806412B07E9EA38A5C3BED060A835B0F721B05C664A0334CE5322EE4011248758BEADFFCC40EDE62B9BA855D451EDCAFB50E4FD0A64726B50B04AEF59221B621AD059606A9975EEFBC9C6930ED328E020640B1953F3B99E4FE7F27914220219EC9D9E931297876ABAECDEC159753F2669DCE8D1A2572DC23A3ABEC8D33CC3069822ECC8516E60A69CFBD63FBF16770C837206FC40DD08D9FFE367C30B4E85FA506E7B2DACF0C87AD413EE4AD53EED72BCDBC4176BF8AEF97006F991F17BF613D4CCF1134EE8DAB7D7ACF182B7557D1A7E75DC688170DF879CD5483C2FD298F009D53383273C7F02ED81D289AE6391E3F57AAFAC3D1A7041D182D89CA8045AD46F88D8C738C719FF90690F98A6267495128DE7E2A94D3B8533EA7D5527A30D3EE7FC9DBF56B00720ED4429299396092C26CE75D8FF6812F7590B4586A5BD1F0CCE60E0530500706B1AF8E448B50E74B79969A2B5DADA7D2ABA8C378B0B2A3588FCF88CF7DDD2FFD1473B59049310FA5FEDA8B66546C4BF5B0CB0C530A71727DC500B8D25AB382D7D50D5BA551A3DA0729CCEE8E67421DFA71A1F458AEF1C3EA89566D1E7AD04E0485B8EDDDA4A535E717D8A202B3E077F38615A4ED0BA94ADCEC0244E4F6533D4161509D0B9FDE1E318E3C2B4ED1039D52EC8FBFCA36582456B51E6DB52EE9D3BFAA4CC57EB3D8D96EEAE5DDB00B8F9BE41DD794F45793AA72500107013D65488AE7079B97B1E579FFE38D884CBFC6E872C81B7E58D365EF34ADAB2E260C112C9693B69D2F046109E10CA99480EDC8A17033BFB5D7EF3676632D75479DFCBFC02F647576B630D222B040CD540D2DB64951C0E8D42C603A79C8AA5740F134C8013184E7DA05797D6B6EA1CB6475A67F7A0F713E561523A8B4788FAF2ABAA31F81F6E8B1E17C5643E6179251B6387329A082D6D7C7894B84F10BEAB344626AC57E04262278BE0FB4B0668296002CDCD91F7C891DB101B0E3D67B9DD2E0719AE622AE6F1F93C03CB5AFD89E631E8A0885DEE33D610A8622403CF4CA817D2E9C8EB76565D7A1649E275AC06C9A70769813A0DED7CC738EBB1C8841C79D4EC4852C886F1DF4B9E2266C48AD3F646EABFA94B358462B5DF8C04F1A85EB8F445E1AA99F359E5A24A61E0474C6832258903AA9746FA44A996FAF034A26B819BEF7CF418D0F53A3AC2E05BF8E6491F11748DCD4BE73CF8568C9615070FE9CF777F6FCC402AB3E19F2AB86DDFD19225EDD875ECBDAB38F8B69A707B7CA30E9F3E7F23F1D4F081827170226607A5D62CCC3F52ACD130D6554644FDFC1C6A5CFA369090132B6442DC1C805AE0C7D1BC036594A82AA0D8E7CBC12358D83C79EA3F58E26C61D8390377ED74AB5B2D57BEBA76B9ECC4D7951CF4AE9B9D62AD76F20771BCD3FEB159184C23727FC9A14FE040D3D5655887617BC71C8B1E855C327C6288C9EC430B5812910AB6590374161B8DE6080805695D08E2F93357A83BE373DF2CF14395242BF9F2BDE06E63C9AC46200D856FD2BCA6C2F6E1C4FC3658DDD186D2748147A006BE633001879BA752BA21C31B402E71B26F2EC20368888925980AF928269CC31301D9536E9D4FC8BD8253EDEA7FE0C15ADFA0BE202D3310462E90BF8D76A587CD22362ED0B3073CFA82D998C71A7C076A28F430A0F00037917603D7798600224ABDDCCB814D13F9937F32CCF3054377FD49545F2555BC6C9AB924CD90A3C64DC0995CF724587FC629A5E761C6AB7B40B4CF241685CE7252F6D8BC5A76C44FD1392C1CD194147B69B5D17F2D6BCB562D8970F09BC4A36C6D896A1A8C8B7805AF5C721573BA9701319722B7EA52C974AA1141018507E5AD32277B964AEC6A2AF0F9EF767AE67AB422C9C2FD61D39552EC8B67CF38E71C8479DBDF7911D354AF7CE5B9FB039C294A25A7C6030AD83E6DFDC73F7F2B52030BFA490FF445D406E8E4B97389F7EF087DA876DC64BE38D6C0439B9E91657680E8D8C65B5D14C30AB918BDA1801689F4EEF709214A7AA9B5EC75D69292B31AD4CDAF2A3D75884A68B11070705F42CAC02CD656578056EED05B706E8CACF0D752E170E32B9551F20FD4411DC613A5783486D1DDCB2B3562DE43425A41D41C562CDFE493BA1AC48A6059B01CE06777CC644EB83149F69C612DB2501432BF54DC56F3ACF15D4FA3036FFD6E00A931377B86A9401D5C9BBB60DD54E30C06C1ACDDADDDB7FF49305CCE699B9CE33AEE08B00FFD9BDA545E4BD8A9AE2F06AED175E20A4EE63D3C69CADF83F84EF03477886B444E7132AF082B2AA53DDC31F893B61953D94C8B6587D0CD2C53D08170473A05EA02DE0CBA2BE946F2CAB33F5460EC1ABB69F0733589AAEE34EED0DF2DA73C8FA8F236DF223262FED9931984694FDCA8E186D6B25B090E6E0E5FABCFBC074A642DEB80D4FDF4723A4524ABB94F15FCF6093CB298C5FBED5E9D51B891ED0CBDFD31805C70BB065398FCB991DA70D848C66B12B15518BF0F94E9BD0420A57364752B986D50941D1705117E9D68F3324369EF85306A80640DF870368506E5DC46186575DF99CC4A70A9C43EC67E8BCAA9E0E04EB2533D574F6C58B4417FD983E4CBB4349D44B24CB742A4FEE1E44BAF201091D18998770F95A63CF1C4BF05E68D687B9CAE502E81F735E5EF7F4614D837A37B956F7B1BF94557F4B2F0089B664816149C96966830D6C4B25AFC5749A2EEF406FFC51C900885DC217CB5A87C3F5466062BFD76AAAB8B57B25B0D896934916E456DCFC32B68B611908FC268064CBF3AE77C1A62210EECE9277B80A648AF400860FC643763978EBA898A6F1E2B6EDA8C97947A5A941998166F65A8A20111110483A1EA5C3D0316BBD7510FFE8CD74E03D0C9C7E4D0EF020CEF224F256E7F4D00F2F3F52DDE86BC15E9D674C25FAF2F5EA0B27F7D0A290A1A59B950CCCB2D0DD35390CDC647D3254EA8AE854FDE00FC76A1C946DFA175423E8840150A6AD1D8EB7FC6A6F2331CEEFB795A510027C992722762E1AD7CC784D1586BCE39ACAC6B2670E7B97726C3E8C6BD0C8454CFF46FCBDCA49B8576980A31FF18ABD124FC4A948DECDF60ED74AEB7AA19674C840711EBA37D344EAF26A033794652A3F7FB71FC202A4D5790ABCE5E8A80D4BC4C807B864090B44D2CB36A522349DB98A42F18CAE4E5D131892E7A24EEEE10CAED474B235AD235A3C22F65427C1850B82B44FCD70FA1DDCB6741F6E3AC4BA71C05E86BDF62EB8769FE2F84DB4E2FDBF89336483A40600C3BE1EC96212971A6534DA76359F45D9D7E50B191C01B151F201A02DAE89885890D9B6A412886682947B216258F06AC9C6EEA163AB0B7C8B11BE93C79583BE4EBE77DEEB4EAB252DDEAD86742455D311A684FBBCC2DF4C0041C343DA6863CC817835799CB8E4B01D61E0D05F0ADCB430D3EAD63CF0EF32F2D86E2B844F418E33C395018F6BD5FD6867359A1EA3C0EF900AD2E20D50A46E45C710A6059ADCF78C19B264EE9F31FD6C98DA75B326345ECAC28B4F470334571F4BBA58854C8CA5D2AA0A98A00C5FD57A58ACA9506239D884140DBA0ED9537EDB053574861493EF1D4B9429305332A773E4B2CD1C89E41CC70EF28476E965F7ADDB812B1F621926441485FC64560A08A424B25F67019982014A52257984AFBD25E8EBC8AFD8B6AD790302BFF795B6C6BC223F0A1D19E3D8205B58C015658B3D8B69874B3E3A24C90F7B02C618CE26FD77DC2E5A02BF4147B461CBDA9CAFFFBC1FC842A996D71C7229BA4FD48E613E2B593774B1CB30C0DEEF1659F1165CD106CD5BDC0DC8BA7AFD1B0341A4528F33ED17F8E1D603150DF8C11F21800AD502831C7C0E70C4086F0B6611FDDCB6AD7EDAF51E1605387317FDE68B9938CBA2C38423A624E35C4779213D93059B427EFFE977D68C67E3D194DAC474D6E11F99FA5D1ABCFA6178308CF9AC87CE10674FD8DE742EDDD34798118E9FC7D59BAB23C055E5C4CB900E4120B8E60E32EA83F03D3574527BD79F7CEA5E62F943D74C07739D76886D797D815F726E18CA1CAD085BE282E1CDFE9B4F6159984A8D7407C53216A5A83E47181C8EF8B12450B7198795490C4F3D6F48F4F49F7F1D1566D97968AB6F8D3EC0B139A63C0432C49A769612C1245AA1881FA8ABA7D987D574620F394E09DB3FFEF3B8ED9CF0C46D2A7DEC9CA4292A1D097D3D131B61FF18EE21926D1F7E21A4092C88A25E8070A91E5B6BCB86998C15C4DF9E1F83EA34E402B0383C3A7A85BFA824E50E3F336233218AF904455FB6844E04439A31FC00B21C81D8FC481E7225E039D0006340854DCA5D83030248666E1802190EAA5BBD5520DEC8E72F76E252B6742865F7DA20CBCE23A261B7049CAECD454E591B12B6EF9E16EFD45FD7222D7FF59456DA0DE4137B8E86134A3FB7FD751223C813F6C157E650FDA2EA702C44BAE2F5873902AB7AA903F5520743255D42546626FFF7251BA2C36F0F775CA3D30B6242520AB017D645F2361FB878F7DA990961913D11BBCF4AA8152976B91A8FFA7375E7A14F04538C5CCD0D823CC31C67A51FC3BEF7CC0B55C77FBA79C28FB1F0F0E8538F4177ABCCFFAD8FFD3F7B2473327200E693FCA5D374931D71E2AB8BD43E3BF8942A6C49FF62A92F78CD4F9FA97D8587664EA94A81F8E6175CD8C09DFBC696615A1ECDC6DB9BBF9A4220814EFF8E3CE286683E2F0A5304E1F485A4BA1781FEE9A14ADAE73A6E8AA0B2526C90449222CFEF97A96775FEC3A990E4077F498EBAF7861567DF34E4C183DA327FD9986B5148DFB4E5AC0D5D294655FC9E7AF3A1163BA05C20870D73AABB2183D9EFF5BD9D71C5C58BD4236A76246970BEB01DEEBDE739712585C769ED1211810B8206BF743A2EE11D1556AD7E7BA0A63E9C7E8DB2E231EFA96545C3DF14CF146ED6B0565159BBD6A30801AF7D8D17D2DB9184C52DF75D95D759921F5A20EF5DB677363353A8FF0ED5C1F9FC0B58F5238227232D56C96A16C1E21DE40459B1441890B4CC1108E6C835FCB2685EF38BA9BDF4C177417207A1B319E09BA8C875383DA9F2D9EBFFEB2AB54A1351B7AD67431A4EBA59526DB01CD1E2C1CD3AF387C61EB160F794F31DB4BFF702FDD95F22C981EFD88A16DBEFA36D41BAF44E3679F5816BE0C88DC0529572EA6BB0A7D81B654FBB64EC1987C197ED57B91FDE25501F7B84E93CD2595417B19F3968C0621807AD67A2EB0432D3C2433756A74D778BE24495DE04A846954952AB33417F85C45A0AAEC27089D492E727FFF96A1B800F890A53320F44E4971BE435560989BDD60118080687E3C1F36E460EFB9102FCC1F9C3DDC0899FCF3CF39F6283033FC9EACA86C849B3715B0067FC4FC37C261BF37240D14E9F1056FDCFCC8A654CC937A93787FADDE18025DBD97DBB05DE560C6DB9DC0AB639DCE67F0F5A1B62F60491D17313B8E79A17AB3B80345E64B67BC2B64DF4AD50FBEAC6910DB7FFCAABDF99889B502356DECDB431EC4ED8E4AAFDA1F374667F22385065E2BCED90A75B1D7A2971249D2CDD3BEF7E3A7A4D43088C7B169207D147DD66E3D5C05C56A4D0EE983E038419AD61F41461C15C2F94C491F8681B9595B627B341F3B8E6AFEA229780C1A11D695F827E723389CB0490B3B151560D9FF02EF5D830B8713F31144E28ADA06ADC017EDE1AC6F6DF37459982309799627902FAB969A7D44AB93333E19193E6BC48E0967F14AB24017180240B43E945E1449F2EAE97B8493FBDF0B6BDAC33DF3BA4EFB9D41447607F5A19598178B98827A3494A3F4E2F2A0C6C93076040FDECB585A0A96154FC4262CD6F8B2B027B90A14E6DDF2BA60A0E95A6933111B2AA7D3352A15B98060E3A64E6C8E290C6AB1AB16766609F2FA0DB31B5881BCE014988CAC2F15C29BCDDC5F9A6628F126CFD30DCB0DB5B30952A8F5F82F83D46E9464365726D8DAEADD83B5F3803ECDFA7843849277F1ABC04B3385100E9BBF0A7A0BAC53965718CF4A37DDD9D802326260FE31934D0D79C1';
let secret = CryptoJS.enc.Utf8.parse('w28Cz694s63kBYk4');
let iv = CryptoJS.enc.Utf8.parse("4kYBk36s496zC82w");

let res = CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(data)), secret, {
    iv: iv,
    mode:CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

let res_data = CryptoJS.enc.Utf8.stringify(res);
console.log(res_data);