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
        }
    },
});
