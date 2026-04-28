import { DialogTrigger, ModalOverlay, Modal, Dialog, Button, Heading } from 'react-aria-components'
import { RiArrowRightSFill, RiArrowLeftSFill, RiEqualizerLine, RiListSettingsFill, RiListSettingsLine, RiFilter3Fill, RiFilter2Fill } from "react-icons/ri"
import ItemsFiltering from './ItemsFiltering'

export default function ItemResultsMobileFilterModal(){
    return (
        <DialogTrigger>
            <Button className='resultslist-mobile-filter-btn'>
                Filter <span>Results</span> <RiFilter3Fill />
            </Button>
            <ModalOverlay className='resultslist-mobile-filter-modaloverlay' isDismissable={true}>
                <Modal>
                    <Dialog>
                        <Heading slot="title">Title Test</Heading>
                        <Button slot="close">Close</Button>
                        <ItemsFiltering />
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    )
}