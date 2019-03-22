import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    modal: service(),
    actions: {
        showPlainModal() {
            this.get('modal').open('plain');
        },
        showPlainModalCorrected() {
            this.get('modal').open('plaincorrected');
        },
        showInputMessageModal(messageNumber) {
            this.get('modal').open('message', { message: "Message " + messageNumber });
        },
        showInputDynamicMessageModal(message) {
            this.get('modal').open('message', { message: message });
        },
        showInputFullDynamicModal(message, title, buttonLabel) {
            this.get('modal').open('fulldynamic', { message: message, title: title, buttonLabel: buttonLabel });
        },
        showFeedback1Modal() {
            this.get('modal').open('feedback1').then(() => {
                this.set('feedback1', "Accepted");
            }).catch(() => {
                this.set('feedback1', "Rejected");
            });
        },
        showFeedback2Modal() {
            this.get('modal').open('feedback2').then((option) => {
                this.set('feedback2', "$" + option + ", thank you! :)");
            }).catch(() => {
                this.set('feedback2', "No donation :(");
            });

        }

    },
});
