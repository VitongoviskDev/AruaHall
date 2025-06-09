import type MenuButtonDTO from "../DTOs/MenuButtonDTO";
import { FaGlobe, FaHamburger, FaPaintRoller, FaPencilRuler, FaShoppingBasket, FaTshirt } from "react-icons/fa";
import { GiIsland, GiMineTruck } from "react-icons/gi";
import { PiCourtBasketballFill, PiParkBold } from "react-icons/pi";
import { IoRestaurant } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { BsBuildingsFill } from "react-icons/bs";
import { MdCarRental, MdCleaningServices, MdEngineering } from "react-icons/md";
import { LuBrickWall } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import type CardDTO from "../DTOs/CardDto";

export const Menu: MenuItem = {
    items: [
        {
            title: "Home",
            path: "//"
        },
        {
            title: "Locais",
            path: "/locals",
            submenus: [
                {
                    title: "Lazer",
                    path: "/locals/leisure",
                    items: [
                        {
                            title: "Parques",
                            path: "/locals/leisure/parks",
                            icon: <PiParkBold />
                        },
                        {
                            title: "Pousadas",
                            path: "/locals/leisure/inns",
                            icon: <GiIsland />
                        }
                    ]
                }, {
                    title: "Restaurantes",
                    path: "/locals/restaurants",
                    items: [
                        {
                            title: "Hamburguerias",
                            path: "/locals/restaurants/burgers",
                            icon: <FaHamburger />

                        },
                        {
                            title: "Self-Service",
                            path: "/locals/restaurants/self-service",
                            icon: <IoRestaurant />

                        }
                    ]
                }, {
                    title: "Compras",
                    path: "/locals/shopping",
                    items: [
                        {
                            title: "Roupas",
                            path: "/locals/shopping/cloths",
                            icon: <FaTshirt />

                        },
                        {
                            title: "Mercados",
                            path: "/locals/shopping/markets",
                            icon: <FaShoppingBasket />

                        },
                        {
                            title: "Eletrônicos",
                            path: "/locals/shopping/electronics",
                            icon: <IoIosPhonePortrait />

                        }
                    ]
                }, {
                    title: "Esportes",
                    path: "/locals/sports",
                    items: [
                        {
                            title: "Academias",
                            path: "/locals/sports/gyms",
                            icon: <CgGym />

                        },
                        {
                            title: "Quadras",
                            path: "/locals/sports/courts",
                            icon: <PiCourtBasketballFill />

                        }
                    ]
                }
            ]
        },
        {
            title: "Serviços",
            path: "/services",
            submenus: [
                {
                    title: "Limpeza",
                    path: "/services/cleaning",
                    items: [
                        {
                            title: "Diarias",
                            path: "/services/cleaning/daily",
                            icon: <MdCleaningServices />
                        },
                        {
                            title: "Empresarial",
                            path: "/services/cleaning/enterprise",
                            icon: <BsBuildingsFill />
                        }
                    ]
                }, {
                    title: "Construção e Reforma",
                    path: "/services/constructions",
                    items: [
                        {
                            title: "Engenheiros",
                            path: "/services/constructions/engineers",
                            icon: <MdEngineering />

                        },
                        {
                            title: "Arquitetos",
                            path: "/services/constructions/architects",
                            icon: <FaPencilRuler />

                        },
                        {
                            title: "Pintores",
                            path: "/services/constructions/painters",
                            icon: <FaPaintRoller />
                        },
                        {
                            title: "Pedreiros",
                            path: "/services/constructions/bricklayers",
                            icon: <LuBrickWall />
                        }
                    ]
                }, {
                    title: "Locação",
                    path: "/services/lease",
                    items: [
                        {
                            title: "Máquinas",
                            path: "/services/lease/machines",
                            icon: <GiMineTruck />

                        },
                        {
                            title: "Carros",
                            path: "/services/lease/cars",
                            icon: <MdCarRental />

                        }
                    ]
                }, {
                    title: "Publicidade",
                    path: "/services/publicity",
                    items: [
                        {
                            title: "Sites",
                            path: "/services/publicity/sites",
                            icon: <FaGlobe />

                        },
                        {
                            title: "Mídias Sociais",
                            path: "/services/publicity/social-media",
                            icon: <SlSocialInstagram />

                        }
                    ]
                }
            ]
        },
        {
            title: "Sobre",
            path: "/about"
        },
        {
            title: "Contato",
            path: "/contact"
        }
    ]
}

export const ServiceCards: Cards = {
    cards: [
        {
            Title: "Jardinagem",
            Subtitle: "gramados, arbustos e pequenas arvores",
            Rate: 4.5,
            Categories: [
                {
                    id: 1,
                    category: "Manutenção",
                    subcategories: [
                        {
                            id: 1,
                            subcategory: "Jardinagem"
                        }
                    ]
                },
                {
                    id: 2,
                    category: "Construção",
                    subcategories: [
                        {
                            id: 1,
                            subcategory: "Jardinagem"
                        }
                    ]
                }
            ],
            Address: {
                zipcode: "0123456789",
                address: "Rua 12",
                number: "1",
                complement: "Q12 L07 B02",
                city: "Mogi das Cruzes",
                neighbor: "mogilar"
            },
            WorkingDays: [
                {
                    day: "Monday",
                    start: "09:00:00",
                    end: "18:00:00"
                },
                {
                    day: "Tuesday",
                    start: "09:00:00",
                    end: "18:00:00"
                },
                {
                    day: "Wednesday",
                    start: "09:00:00",
                    end: "18:00:00"
                },
                {
                    day: "Thursday",
                    start: "09:00:00",
                    end: "18:00:00"
                },
                {
                    day: "Friday",
                    start: "09:00:00",
                    end: "18:00:00"
                }
            ]
        },
        {
            Title: "Pintura",
            Subtitle: "especialistas de pintura interna e externa",
            Rate: 4.0,
            Categories: [
                {
                    id: 1,
                    category: "Manutenção",
                    subcategories: [
                        {
                            id: 2,
                            subcategory: "Pintura"
                        }
                    ]
                },
                {
                    id: 2,
                    category: "Construção",
                    subcategories: [
                        {
                            id: 2,
                            subcategory: "Pintura"
                        }
                    ]
                }
            ],
            Address: {
                zipcode: "0123456789",
                address: "Rua 12",
                number: "1",
                complement: "Q12 L07 B02",
                city: "Mogi das Cruzes",
                neighbor: "mogilar"
            },
            WorkingDays: [
                {
                    day: "Monday",
                    start: "09:00:00",
                    end: "18:00:00"
                },
                {
                    day: "Tuesday",
                    start: "09:00:00",
                    end: "18:00:00"
                },
                {
                    day: "Wednesday",
                    start: "09:00:00",
                    end: "18:00:00"
                }
            ]
        }
    ]
}

interface MenuItem {
    items: MenuButtonDTO[];
}

interface Cards {
    cards: CardDTO[];
}