"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const crypto_1 = __importDefault(require("crypto"));
const util_1 = require("util");
const voters_dao_1 = __importDefault(require("../daos/voters.dao"));
//  add service to send e-mail upon user creation
class VotersService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.addVoter(resource);
        });
    }
    // make delete by email
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.removeVoterById(id);
        });
    }
    deleteByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.removeVoterByEmail(email);
        });
    }
    // get all voters
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.getVoter(limit, page);
        });
    }
    listCandidates() {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.getCandidates();
        });
    }
    // make this to return a voters email given the voter ID
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.getVoterById(id);
        });
    }
    getVoterByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.getVoterByEmail(email);
        });
    }
    getVoterByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return voters_dao_1.default.getVoterByToken(token);
        });
    }
    sendEmail(receiver, token) {
        return __awaiter(this, void 0, void 0, function* () {
            // let testAccount = await nodemailer.createTestAccount();
            let transporter = nodemailer_1.default.createTransport({
                host: '***REMOVED***',
                port: 465,
                secure: true,
                auth: {
                    user: 'apikey',
                    pass: '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',
                },
            });
            // send mail with defined transport object
            let info = yield transporter.sendMail({
                from: '"Plataforma Eleitoral da AEMOJA" <plataformaeleitoral@***REMOVED***.org>',
                to: [receiver, 'deliodownload@gmail.com'],
                subject: 'Confirmação de Registo na Plataforma Eleitoral da  AEMOJA',
                text: `Acabou de registar-se na Plataforma Eleitoral da AEMOJA. Quando for votar, use o código seguinte para validar o seu voto: ${token}`,
                html: `<b> Acabou de registar-se na Plataforma Eleitoral da AEMOJA. Quando for votar, use o código seguinte para validar o seu voto ${token}</b>`, // html body
            });
            console.log('Message sent: %s', info.messageId);
            return info.messageId;
        });
    }
    getS3link() {
        return __awaiter(this, void 0, void 0, function* () {
            const region = 'ap-northeast-1';
            const bucketName = '***REMOVED***';
            const accessKeyId = '***REMOVED***';
            const secretAccessKey = '***REMOVED***';
            const s3 = new aws_sdk_1.default.S3({
                region,
                accessKeyId,
                secretAccessKey,
                signatureVersion: 'v4',
            });
            const randomBytes = util_1.promisify(crypto_1.default.randomBytes);
            const rawBytes = yield randomBytes(16);
            const imageName = rawBytes.toString('hex');
            const params = {
                Bucket: bucketName,
                Key: imageName,
                Expires: 3600,
            };
            const uploadURL = yield s3.getSignedUrlPromise('putObject', params);
            console.log(uploadURL);
            return uploadURL;
        });
    }
}
exports.default = new VotersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNlcy92b3RlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFvQztBQUNwQyxzREFBMEI7QUFDMUIsb0RBQTRCO0FBQzVCLCtCQUFpQztBQUNqQyxvRUFBMkM7QUFHM0MsaURBQWlEO0FBQ2pELE1BQU0sYUFBYTtJQUNaLE1BQU0sQ0FBQyxRQUF5Qjs7WUFDckMsT0FBTyxvQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFRCx1QkFBdUI7SUFDakIsVUFBVSxDQUFDLEVBQVU7O1lBQzFCLE9BQU8sb0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEtBQWE7O1lBQ2hDLE9BQU8sb0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFRCxpQkFBaUI7SUFDWCxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3JDLE9BQU8sb0JBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLGNBQWM7O1lBQ25CLE9BQU8sb0JBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFRCx3REFBd0Q7SUFDbEQsUUFBUSxDQUFDLEVBQVU7O1lBQ3hCLE9BQU8sb0JBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEtBQWE7O1lBQ2xDLE9BQU8sb0JBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEtBQWE7O1lBQ2xDLE9BQU8sb0JBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLFFBQWdCLEVBQUUsS0FBYTs7WUFDOUMsMERBQTBEO1lBRTFELElBQUksV0FBVyxHQUFHLG9CQUFVLENBQUMsZUFBZSxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLHVFQUF1RTtpQkFDN0U7YUFDRCxDQUFDLENBQUM7WUFFSCwwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUNyQyxJQUFJLEVBQUUsbUVBQW1FO2dCQUN6RSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUseUJBQXlCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSwyREFBMkQ7Z0JBQ3BFLElBQUksRUFBRSw2SEFBNkgsS0FBSyxFQUFFO2dCQUMxSSxJQUFJLEVBQUUsZ0lBQWdJLEtBQUssTUFBTSxFQUFFLFlBQVk7YUFDL0osQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVLLFNBQVM7O1lBQ2QsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7WUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDO1lBQ25DLE1BQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFDO1lBQzNDLE1BQU0sZUFBZSxHQUFHLDBDQUEwQyxDQUFDO1lBRW5FLE1BQU0sRUFBRSxHQUFHLElBQUksaUJBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07Z0JBQ04sV0FBVztnQkFDWCxlQUFlO2dCQUNmLGdCQUFnQixFQUFFLElBQUk7YUFDdEIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxXQUFXLEdBQUcsZ0JBQVMsQ0FBQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sUUFBUSxHQUFHLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0MsTUFBTSxNQUFNLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLEdBQUcsRUFBRSxTQUFTO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2FBQ2IsQ0FBQztZQUVGLE1BQU0sU0FBUyxHQUFHLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7S0FBQTtDQUNEO0FBQ0Qsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9