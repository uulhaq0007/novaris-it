import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Reveal from '../ui/Reveal'
import { team } from '../../data/site'

const socials = [FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram]

export default function Team({ showCta = true }) {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[660px]">
            <Reveal>
              <span className="eyebrow">Exclusive Members</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title">Meet Our Experienced Team Members</h2>
            </Reveal>
          </div>
          {showCta && (
            <Reveal delay={200}>
              <Link
                to="/team"
                className="group inline-flex items-center gap-2 font-display text-[15px] font-bold uppercase tracking-wide text-heading transition hover:text-accent"
              >
                View All Members
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          )}
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 110}>
              <article className="group text-center">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[330px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/85 via-heading/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-5 flex translate-y-6 justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {socials.map((Icon, s) => (
                      <a
                        key={s}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        aria-label={`${member.name} social profile`}
                        className="grid h-9 w-9 place-items-center rounded-full bg-white text-heading transition hover:bg-accent hover:text-white"
                        style={{ transitionDelay: `${s * 60}ms` }}
                      >
                        <Icon className="text-[13px]" />
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="mt-6 font-display text-[20px] font-bold transition-colors duration-300 group-hover:text-accent">
                  {member.name}
                </h3>
                <p className="mt-1 text-[15px] text-accent">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
