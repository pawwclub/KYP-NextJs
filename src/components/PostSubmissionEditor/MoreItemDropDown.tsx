import { FC, Fragment } from 'react'
import {
	Menu,
	MenuButton,
	MenuItems,
	Transition,
	MenuItem as MenuItemUI,
} from '@headlessui/react'
import { TiptapBarItem, TiptapBarItemDivider } from './MenuBar'
import MenuItem from './MenuItem'
import { Editor } from '@tiptap/react'

interface Props {
	data: (TiptapBarItem | TiptapBarItemDivider)[]
	editor: Editor
}

const MoreItemDropDown: FC<Props> = ({ data = [], editor }) => {
	return (
		<Menu
			as="div"
			className="relative ms-auto hidden text-start lg:inline-block"
		>
			<MenuButton className={'menu-item ms-auto'} title={'more'}>
				<div className="menu-item-svg">
					<svg
						className="crayons-icon c-btn__icon"
						aria-hidden="true"
						focusable="false"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
						></path>
					</svg>
				</div>
			</MenuButton>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<MenuItems
					className={`absolute end-0 top-0 z-40 w-auto origin-top-right divide-y divide-neutral-100 rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rtl:origin-top-left dark:bg-neutral-900 dark:ring-white dark:ring-opacity-10`}
				>
					<div className="flex items-center p-2.5 text-sm text-neutral-600 dark:text-neutral-300">
						{data.map((item, index) => (
							<MenuItemUI key={index} as="div">
								{(item as TiptapBarItemDivider).type === 'divider' ? (
									<div className="divider" />
								) : (
									<MenuItem
										// {...(item as TiptapBarItem)}
										icon={(item as TiptapBarItem).icon}
										action={(item as TiptapBarItem).action}
										title={(item as TiptapBarItem).title}
										isActive={(item as TiptapBarItem).isActive}
										// editor={editor}
										className="mr-0.5"
									/>
								)}
							</MenuItemUI>
						))}
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	)
}

export default MoreItemDropDown
