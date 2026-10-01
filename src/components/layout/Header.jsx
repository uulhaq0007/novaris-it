import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  FiChevronDown,
  FiMail,
  FiMenu,
  FiPhone,
  FiSearch,
  FiX,
} from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Logo from '../ui/Logo'
import { navigation, site } from '../../data/site'

const socialIcons = [FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram]

export default function Header() {
  const [stuck, setStuck] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close every overlay whenever the route changes.
  useEffect(() => {
    setDrawerOpen(false)
    setSearchOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen, searchOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="relative z-50">
      {/* Top utility bar */}
      <div className="hidden bg-heading text-white/75 lg:block">
        <div className="container flex h-[46px] items-center justify-between text-[14px]">
          <div className="flex items-center gap-7">
            <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 transition hover:text-white">
              <FiPhone className="text-accent-light" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-white">
              <FiMail className="text-accent-light" /> {site.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden xl:block">{site.hours}</span>
            <div className="flex items-center gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Social profile"
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-[12px] transition hover:bg-accent hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`w-full transition-all duration-300 ${
          stuck
            ? 'fixed inset-x-0 top-0 animate-[floatY_0ms] bg-white shadow-nav'
            : 'relative bg-white'
        }`}
      >
        <div className="container flex h-[84px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-4 py-8 font-display text-[16px] font-bold transition-colors duration-200 ${
                      isActive ? 'text-accent' : 'text-heading hover:text-accent'
                    }`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                  {item.children && (
                    <FiChevronDown className="text-[13px] transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </NavLink>

                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-20 w-[230px] translate-y-4 rounded-b-lg border-t-[3px] border-accent bg-white py-3 opacity-0 shadow-card transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          className="block px-6 py-2 text-[15px] font-medium text-heading transition-all duration-200 hover:translate-x-1.5 hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-heading transition hover:border-accent hover:bg-accent hover:text-white"
            >
              <FiSearch />
            </button>
            <Link to="/contact" className="btn-primary hidden xl:inline-flex">
              Consultancy
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-md bg-accent text-white lg:hidden"
            >
              <FiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer so the sticky bar does not jump the layout */}
      {stuck && <div className="h-[84px]" aria-hidden="true" />}

      {/* Search overlay */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-heading/95 px-6 transition-opacity duration-300 ${
          searchOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setSearchOpen(false)}
          aria-label="Close search"
          className="absolute right-8 top-8 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:bg-accent"
        >
          <FiX className="text-2xl" />
        </button>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[640px] border-b-2 border-white/30 pb-4"
        >
          <label htmlFor="site-search" className="sr-only">
            Search this site
          </label>
          <div className="flex items-center gap-4">
            <input
              id="site-search"
              type="search"
              placeholder="Type a keyword and hit enter…"
              className="w-full bg-transparent font-display text-[22px] text-white placeholder-white/40 outline-none sm:text-[30px]"
            />
            <button type="submit" aria-label="Search" className="text-white transition hover:text-accent-light">
              <FiSearch className="text-3xl" />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${drawerOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!drawerOpen}
      >
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-heading/60 transition-opacity duration-300 ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[330px] max-w-[86vw] flex-col bg-white shadow-2xl transition-transform duration-400 ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-mist text-heading transition hover:bg-accent hover:text-white"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-black/5">
              {navigation.map((item) => {
                const expanded = openSubmenu === item.label
                return (
                  <li key={item.label} className="py-1">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          `block py-3 font-display text-[17px] font-bold ${isActive ? 'text-accent' : 'text-heading'}`
                        }
                      >
                        {item.label}
                      </NavLink>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() => setOpenSubmenu(expanded ? null : item.label)}
                          aria-expanded={expanded}
                          aria-label={`Toggle ${item.label} submenu`}
                          className="grid h-8 w-8 place-items-center rounded-md bg-mist text-heading"
                        >
                          <FiChevronDown className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {item.children && (
                      <ul
                        className="grid transition-all duration-300"
                        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
                      >
                        <li className="overflow-hidden">
                          <ul className="pb-2 pl-4">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  to={child.to}
                                  className="block py-2 text-[15px] text-body transition hover:text-accent"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>

            <Link to="/contact" className="btn-primary mt-7 w-full">
              Consultancy
            </Link>

            <div className="mt-8 space-y-3 text-[15px]">
              <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 hover:text-accent">
                <FiPhone className="text-accent" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent">
                <FiMail className="text-accent" /> {site.email}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 pb-6">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Social profile"
                  className="grid h-9 w-9 place-items-center rounded-full bg-mist text-heading transition hover:bg-accent hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </nav>
        </aside>
      </div>
    </header>
  )
}
