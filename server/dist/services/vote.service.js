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
const vote_dao_1 = __importDefault(require("../daos/vote.dao"));
//  add service to send e-mail upon user creation
class VoteService {
    castVote(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return vote_dao_1.default.addVote(resource);
        });
    }
    // The below should actually be used by the result endpoint/controller !!!
    checkIfVotedByEmail(voterEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            return vote_dao_1.default.getVoterByEmail(voterEmail);
        });
    }
    checkIfVotedByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return vote_dao_1.default.getVoterByToken(token);
        });
    }
    VoteConfirmationEmail(receiver, candidateName) {
        return __awaiter(this, void 0, void 0, function* () {
            // let testAccount = await nodemailer.createTestAccount();
            let transporter = nodemailer_1.default.createTransport({
                host: 'smtp.sendgrid.net',
                port: 465,
                secure: true,
                auth: {
                    user: 'apikey',
                    pass: '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', // generated ethereal password
                },
            });
            // send mail with defined transport object
            let info = yield transporter.sendMail({
                from: '"Plataforma Eleitoral da AEMOJA" <plataformaeleitoral@aemoja.org>',
                to: receiver,
                subject: 'O Seu Voto Foi Registado Na Plataforma Eleitoral da AEMOJA',
                text: `Votou em ${candidateName} na eleição presidencial da AEMOJA`,
                html: `<b>  votou ${candidateName} na eleição presidencial da AEMOJA </b>`, // html body
            });
            console.log('Message sent: %s', info.messageId);
            return info.messageId;
        });
    }
}
exports.default = new VoteService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvdm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQW9DO0FBQ3BDLGdFQUF1QztBQUd2QyxpREFBaUQ7QUFDakQsTUFBTSxXQUFXO0lBQ1YsUUFBUSxDQUFDLFFBQWlCOztZQUMvQixPQUFPLGtCQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVELDBFQUEwRTtJQUVwRSxtQkFBbUIsQ0FBQyxVQUFrQjs7WUFDM0MsT0FBTyxrQkFBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFSyxtQkFBbUIsQ0FBQyxLQUFhOztZQUN0QyxPQUFPLGtCQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLFFBQWdCLEVBQUUsYUFBcUI7O1lBQ2xFLDBEQUEwRDtZQUUxRCxJQUFJLFdBQVcsR0FBRyxvQkFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDNUMsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFO29CQUNMLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSx1RUFBdUUsRUFBRSw4QkFBOEI7aUJBQzdHO2FBQ0QsQ0FBQyxDQUFDO1lBRUgsMENBQTBDO1lBQzFDLElBQUksSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDckMsSUFBSSxFQUFFLG1FQUFtRTtnQkFDekUsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osT0FBTyxFQUFFLDREQUE0RDtnQkFDckUsSUFBSSxFQUFFLFlBQVksYUFBYSxvQ0FBb0M7Z0JBQ25FLElBQUksRUFBRSxjQUFjLGFBQWEseUNBQXlDLEVBQUUsWUFBWTthQUN4RixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQztLQUFBO0NBQ0Q7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=