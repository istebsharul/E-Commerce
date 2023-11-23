import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
    Bars3Icon,
    ShoppingCartIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../cart/cartSlice';

const user = {
    name: 'Sharul Bari',
    email: 'shar@gmail.com',
    imageUrl:
        'data:image/jpeg;base64,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',
};
const navigation = [
    { name: 'Home', href: '#', current: true },
    // { name: 'Team', href: '#', current: false },
];
const userNavigation = [
    { name: 'Your Profile', link: '/' },
    { name: 'Settings', link: '/' },
    { name: 'Sign out', link: '/login' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function NavBar({ children }) {

    const items = useSelector(selectItems);

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to="/">
                                                <img
                                                    className="h-8 w-8"
                                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                    alt="Your Company"
                                                />
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <Link to="/cart">
                                                <button
                                                    type="button"
                                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                    <span className="sr-only">View notifications</span>
                                                    <ShoppingCartIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </Link>
                                            {items.length > 0 && <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                {items.length}
                                            </span>}

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src={user.imageUrl}
                                                            alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <Link
                                                                        to={item.link}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={user.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">
                                                {user.name}
                                            </div>
                                            <div className="text-sm font-medium leading-none text-gray-400">
                                                {user.email}
                                            </div>
                                        </div>
                                        <Link to="/cart">
                                            <button
                                                type="button"
                                                className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <ShoppingCartIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </Link>
                                        {items.length > 0 && <span className="inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                            {items.length}
                                        </span>}
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            E-Commerce
                        </h1>
                    </div>
                </header> */}
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}

export default NavBar;