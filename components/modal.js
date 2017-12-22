import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
var Link       = ReactRouterDOM.Link;


const ModalBasic = () => (
  <Modal trigger={<Button>Se connecter</Button>} basic size='small' color="#00cccc">
    <Header icon='sign in' content='Déjà inscrit ?' />
    <Modal.Content>
      <p>Cliquez ici pour vous connecter. En vous connectant, vous acceptez les conditions générales d'utilisations, le stockage de cookies vous concernant par Oui Sports, de recevoir notre newsletter et 1000 ans de bonheur.  </p>
    </Modal.Content>
    <Modal.Actions>
      <Button inverted color='red' >
        <Icon name='remove' /> Beurk
      </Button>
       <Link to="/sessionlist"><Button inverted color='green' >
        <Icon name='checkmark' />  Cool
       </Button></Link>
    </Modal.Actions>
  </Modal>
)

export default ModalBasic;
