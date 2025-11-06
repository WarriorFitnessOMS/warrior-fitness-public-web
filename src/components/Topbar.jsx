import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div>
        {/* 🔹 Top Bar */}
        <div className="bg-orange-600 text-white flex justify-between items-center px-6 md:px-26 py-2 text-sm">

            <div className="flex items-center gap-6">

                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>info@warriorfitness.com</span>
                </div>

                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+94 77 123 4567</span>
                </div>

            </div>

            <div className="items-center gap-4 text-xl hidden sm:flex ">

                <a href="#" className="hover:text-black transition-all duration-200">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="hover:text-black transition-all duration-200">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="hover:text-black transition-all duration-200">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>

        </div>
    </div>
  )
}

export default Topbar
