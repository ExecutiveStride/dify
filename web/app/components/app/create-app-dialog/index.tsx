'use client'
import { useTranslation } from 'react-i18next'
import NewAppDialog from './newAppDialog'
import AppList, { PageType } from '@/app/components/explore/app-list'
import { XClose } from '@/app/components/base/icons/src/vender/line/general'

type CreateAppDialogProps = {
  show: boolean
  onSuccess: () => void
  onClose: () => void
}

const CreateAppTemplateDialog = ({ show, onClose }: CreateAppDialogProps) => {
  const { t } = useTranslation()

  return (
    <NewAppDialog
      className='flex'
      show={show}
      onClose={() => {}}
    >
      {/* template list */}
      <div className='grow flex flex-col h-full bg-gray-100'>
        <div className='shrink-0 pl-8 pr-6 pt-6 pb-3 bg-gray-100 rounded-se-xl text-xl leading-[30px] font-semibold text-gray-900 z-10'>{t('app.newApp.startFromTemplate')}</div>
        <AppList pageType={PageType.CREATE} />
      </div>
      <div className='absolute right-6 top-6 p-2 cursor-pointer z-20' onClick={onClose}>
        <XClose className='w-4 h-4 text-gray-500' />
      </div>
    </NewAppDialog>
  )
}

export default CreateAppTemplateDialog
