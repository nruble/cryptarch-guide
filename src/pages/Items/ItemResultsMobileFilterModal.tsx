import { DialogTrigger, ModalOverlay, Modal, Dialog, Button, Heading } from 'react-aria-components'
import { RiArrowRightSFill, RiArrowLeftSFill, RiEqualizerLine, RiListSettingsFill, RiListSettingsLine, RiFilter3Fill, RiFilter2Fill, RiCloseFill } from "react-icons/ri"
import ItemsFiltering from './ItemsFiltering'

export default function ItemResultsMobileFilterModal(){
    return (
        <DialogTrigger>
            <Button className='resultslist-mobile-filter-btn'>
                <span>Filter Results</span> <RiFilter3Fill />
            </Button>
            <ModalOverlay className='resultslist-mobile-filter-modaloverlay' isDismissable={true}>
                <Modal>
                    <Dialog>
                        <div className='resultslist-mobile-filter-head'>
                            <Heading slot="title">Filtering Options</Heading>
                            <Button slot="close"><RiCloseFill /> Close</Button>
                        </div>
                        <ItemsFiltering />
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    )
}