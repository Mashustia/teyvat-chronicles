#### 1.1.12 September-2022

* Changes
  * Added characters:
    * Tighnari
    * Collei
    * Dori
    * Dendro Traveler
  * Added materials:
    * Nagadus emerald sliver,
    * Nagadus emerald fragment,
    * Nagadus emerald chunk,
    * Nagadus emerald gemstone,
    * Nilotpala lotus,
    * Rukkhashava mushrooms,
    * Kalpalata lotus,
    * Fungal spore,
    * Luminescent pollen,
    * Crystalline cyst dust,
    * Faded Red Satin,
    * Trimmed Red Silk,
    * Rich Red Brocade,
    * Teachings of Admonition,
    * Guide to Admonition,
    * Philosophies of Admonition,
    * Teachings of Praxis,
    * Guide to Praxis,
    * Philosophies of Praxis,
    * Teachings of Ingenuity,
    * Guide to Ingenuity,
    * Philosophies of Ingenuity,
    * Majestic Hooked Beak,
    * Thunderclap Fruitcore

#### 1.1.11 August-2022

* Changes
  * Updated packages to last version:
    * fortawesome
    * react
    * testing-library
    * jest
    * i18next
    * typescript
  * Added tests

#### 1.1.10 July-2022

* Changes
  * Added Shikanoin Heizou
  * Changed link names with enum for:
    * All flowers
    * All stones
    * All materials from mobs
    * Specific materials like onikabuto and starconch
  * Changed map link for:
    * Damaged mask
    * Stained mask
    * Ominous mask
    * Treasure hoarder insignia
    * Silver raven insignia
    * Golden raven insignia
    * Dandelion seed
    * Sea ganoderma
    * Whopperflower nectar
    * Shimmering nectar
    * Energy nectar
    * Crystal marrow
    * Windwheel aster
    * Slime condensate
    * Slime secretions
    * Slime concentrate
    * Qingxin
    * Spectral husk
    * Spectral heart
    * Spectral nucleus
    * Cecilia
    * Firm arrowhead
    * Sharp arrowhead
    * Weathered arrowhead
    * Calla lily
    * Sakura bloom
    * Old handguard
    * Kageuchi handguard
    * Famed handguard
    * Violetgrass
    * Divining scroll
    * Sealed scroll
    * Forbidden curse scroll
    * Recruits insignia
    * sergeants insignia
    * Lieutenants insignia
    * Valberry
    * Philanemo mushroom
    * Small lamp grass
    * Glaze lily
    * Silk flower
    * Jueyun chili
    * Amakumo fruit
    * Wolfhook
    * Naku weed
    * Dendrobium
    * Noctilucous jade
    * Sango pearl
    * Starconch
    * Fluorescent fungus
    * Onikabuto
  * Added:
    * Embedded map for Lupus Boreas
    * Golden Wolf Lord on map for geo gems
  * Reworked embedded map for:
    * Varunada lazurite gemstone
    * Varunada lazurite chunk
    * Varunada lazurite fragment
    * Varunada lazurite sliver
    * Agnidus agate gemstone
    * Agnidus agate chunk
    * Agnidus agate fragment
    * Agnidus agate sliver
  * Fixed Itto rarity
  * Changed links for embedded map again because of it's update

#### 1.1.9 June-2022

* Changes
  * Added:
    * Yelan
    * Ruin serpent
    * Kuki Shinobu
  * Added possible teams for:
    * Yae Miko
    * Kamisato Ayato
    * Noelle
    * Geo Traveler
  * Added teams with Yelan for:
    * Diluc
    * Hu Tao
    * Klee
    * Xiangling
    * Yanfei
    * Yoimia
    * Beidou
    * Keqing
    * Raiden
    * Itto
  * Added teams with Yae for:
    * Sara
    * Raiden
    * Fischl
  * Added teams with Ayato for:
    * Xiangling
    * Jean
    * Ayaka
    * Ganyu
    * Fischl
    * Beidou
  * Added Apache License 2.0
  * Updated dependencies:
    * react-scripts to 5.0.1
  * Changed MiHoYo to HoYoverse in copyrights
  * Added embedded map for:
    * Runic fang
    * Hurricane Seed
    * Marionette core
    * Juvenile Jade
    * Crystalline bloom
    * Hoarfrost core
    * Perpetual heart
    * Dragonheirs false fin
    * Lightning prism
    * Storm beads
    * Basalt pillar
    * Riftborn regalia
  * Reworked embedded map for:
    * Vayuda turquoiseg gemstone
    * Vayuda turquoise chunk
    * Vayuda turquoise fragment
    * Vayuda turquoise sliver
    * Shivada jade gemstone
    * Shivada jade chunk
    * Shivada jade fragment
    * Shivada jade sliver
    * Vajrada amethyst gemstone
    * Vajrada amethyst chunk
    * Vajrada amethyst fragment
    * Vajrada amethyst sliver

#### 1.1.8 April-2022

* Changes
  * Added Kamisato Ayato
  * Added materials for Ayato skills

#### 1.1.7 March-2022

* Changes
  * Updated react-router to v6
  * Updated i18next-http-backend to 1.3.2
  * Bug fixes:
    * Fixed scroll when changing characters in party block (now page scrolls up)
    * Go back button in the news block was hidden

#### 1.1.6 February-2022

* Changes
  * Added farming routes for:
    * Treasure hoarder
    * Sea Ganoderma
    * Damaged Mask
    * Glaze Lily
    * Dandelion Seed
    * Slime
    * Windwheel Aster
    * Cor Lapis
    * Calla lily
    * Violetgrass
    * Sealed scroll
    * Valberry
    * Sergeants insignia
    * Dendrobium
    * Noctilucous jade
    * Small lamp grass
    * Whopperflower (add alternative route)
    * Onikabuto
    * Philanemo mushroom
    * Starconch
    * Silk flower
    * Fluorescent fungus
    * Jueyun chili
  * Added embedded interactive app link for Fluorescent Fungus
  * Reworked Character Page:
    * Added calculator for level up materials (exp books included)
    * Added calculator for talent materials
    * Added thousand separator for big numbers
    * Added information about Ley Line Outcrops: Blossom of revelation
    * Now user can go to character profile from possible teams
    * Separate traveler into 3 profiles (anemo, geo, electro)
  * Refactored react-image usage in project
  * Changed spacing between level and skill section
  * Added Google Analytics
  * Bug Fixes:
    * Fixed talent and character level reset
    * Fixed bug for traveler when there was hidden boss material for level up
    * Fixed margin for "Materials are not required" container in materials section
    * Fixed January changelog text
    * Fixed sorting index for level-up materials like handguards
    * Fixed different skill level select style in Safari
    * Fixed characters pale grid in Safari
  * Added Yae Miko
  * Added End of the Oneiric euthymia

#### 1.1.5 January-2022

* Changes
  * Added possible teams for:
    * Yoimiya
    * Zhongli
    * Qiqi
    * Jean
    * Kazuha
    * Kokomi
    * Venti
    * Mona
    * Aloy
    * Sucrose
    * Chongyun
    * Xiangling
    * Xingqiu
    * Diona
    * Rosaria
    * Sayu
    * Kaeya
    * Fischl
    * Sara
    * Lisa
    * Razor
    * Barbara
    * Amber
    * Xinyan
    * Thoma
  * Update packages
  * Added characters:
    * Yun Jin
    * Shenhe
  * Added monster info:
    * Bathysmal Vishap Herd
  * Added scanner for translation files instead of manual import of these files
  * Added section for links with farming routes in material info
  * Added farming routes for:
    * Whopperflower
    * Qingxin
    * Sango Pearl
    * Amakumo Fruit
    * Specter
    * Sakura Bloom
    * Naku Weed
    * Crystal Marrow
    * Handguard

#### 1.1.4 December-2021

* Changes
  * Added possible teams section
  * Added possible teams for:
    * Albedo
    * Beidou
    * Hu Tao
    * Xiao
    * Eula
    * Tartaglia
    * Raiden
    * Ayaka
    * Ganyu
    * Yanfei
    * Klee
    * Itto
    * Gorou
    * Diluc
  * Added Itto and Gorou
  * Added Golden Wolflord material
  * Fixed talent level-up materials for Traveler
  * Images for characters were changed with images with better quality

#### 1.1.3 November-2021

* Changes
  * Added news section
  * Added menu sidebar
  * Changed main color scheme
  * Fixed release number in changelog
  * Added information about crown of insight and traveler's brilliant diamond material
  * Added talent materials summary, fixed Traveler, Zhongli, Ningguang, Beidou ascension materials
  * Added ascension materials summary
  * Added embedded map and description for ascension bosses
  * Added embedded map for ascension materials and talent level-up materials
  * Fixed page scroll on character page

#### 1.1.2 October-2021

* Changed
  * Added embedded map for bosses materials and books
  * Added embedded map for dungeons
  * Fixed active material toggle
  * Added ley lines information
  * Added trademark info
  * Changed background style
  * Fixed errors in characters information
  * Changed grid for main page
  * Added live search
  * Added character stars information
  * Added interactive map links
  * Added english localisation
  * Added talent materials

#### 1.1.1 September-2021

* Changes
  * Group characters by vision
  * Skeleton for images
  * Added logo and minify images
  * Added characters information
  * Added material images
  * Added character ascension materials
  * Fixed vercel error
  * Added character page
  * Added character profile card
  * Added material design system

#### 0.1.0 (2021-10-26)

* Changes
  * Added App compilation
