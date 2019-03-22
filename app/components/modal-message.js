import { inject as service } from '@ember/service';
import ModalComponent from 'ember-modal-service/components/modal';

export default ModalComponent.extend({
    modal: service(),
    actions: {
        closeModal() {
            this.get('modal').close();
            return false;
        },
    }
});
