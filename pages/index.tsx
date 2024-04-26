import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

interface Data {
  dateJoined: string;
  images?: { url: string; label: string }[];
  games: { name: string; date: string }[];
}

export default function Home() {
  const data: Data[] = [
    {
      dateJoined: '2010 (Entrada de Zé e Barbaças, Pinto)',
      images: [
        { url: 'stargen.webp', label: 'Dragon Alliance (Star Gen)' },
        { url: 'shieldgen.webp', label: 'Dragon Alliance (Shield Gen)' },
      ],
      games: [
        {
          name: '1. Ikariam',
          date: '2010',
        },
        {
          name: '2. Top-Eleven',
          date: '2010',
        },
        {
          name: '3. Perfect World',
          date: '2010',
        },
      ],
    },
    {
      dateJoined: '2011 (Entrada de Rafa e Francisco)',
      images: [
        { url: 'assasingen.webp', label: 'Dragon Alliance (Assassin Gen)' },
      ],
      games: [
        {
          name: '4. Team Fortress 2',
          date: '2011',
        },
        {
          name: '5. League of Legends (MOBA)',
          date: '2011',
        },
        {
          name: '6. Warhammer 40 000',
          date: '2011',
        },
        {
          name: '7. Minecraft (Sandbox)',
          date: '2011',
        },
        {
          name: '8. World of Tanks',
          date: '2011',
        },
      ],
    },
    {
      dateJoined: '2012 (Entrada de Gonck; Saída de Pinto)',
      images: [{ url: 'neogen.webp', label: 'NeoAssassin (Neo Gen)' }],
      games: [
        {
          name: '9. Left 4 Dead 2',
          date: '2012',
        },
        {
          name: '10. Allods (MMORPG)',
          date: '2012',
        },
        {
          name: '11. Vindictus (MMORPG)',
          date: '2012',
        },
        {
          name: '12. Fallen Earth (MMORPG)',
          date: '2012',
        },
        {
          name: '13. Pirates of the Burning Sea (MMORPG)',
          date: '2012',
        },
        {
          name: '14. Bloodline Champions',
          date: '2012',
        },
        {
          name: '15. DOTA 2 (MOBA)',
          date: '2012',
        },
        {
          name: '16. Block and load',
          date: '2012',
        },
        {
          name: '17. Attack on Titan Tribute',
          date: '2012',
        },
        {
          name: '18. D&D (RPG)',
          date: '2012',
        },
      ],
    },
    {
      dateJoined: '2013',
      games: [
        {
          name: '19. Seven days to die (Survival)',
          date: '2013',
        },
        {
          name: '20. Panzar',
          date: '2013',
        },
        {
          name: '21. Warface',
          date: '2013',
        },
        {
          name: '22. Blacklight: Retribution',
          date: '2013',
        },
        {
          name: '23. Battlefield Play4Free (FPS)',
          date: '2013',
        },
        {
          name: '24. Smite',
          date: '2013',
        },
      ],
    },
    {
      dateJoined: '2014',
      images: [{ url: 'reborngen.webp', label: 'Neorder (Reborn Gen)' }],
      games: [
        {
          name: '25. D&D: Neverwinter (MMORPG)',
          date: '2014',
        },
        {
          name: '26. Robocraft',
          date: '2014',
        },
        {
          name: '27. Warframe',
          date: '2014',
        },
        {
          name: '28. Borderlands 2',
          date: '2014',
        },
        {
          name: '29. PrimeWorld (MOBA)',
          date: '2014',
        },
        {
          name: '30. Guns and Robots',
          date: '2014',
        },
        {
          name: '31. Dungeon Defenders',
          date: '2014',
        },
      ],
    },
    {
      dateJoined: '2015',
      games: [
        {
          name: '32. Ghostrecon (FPS)',
          date: '2015',
        },
        {
          name: '33. Trove',
          date: '2015',
        },
        {
          name: '34. Defiance (MMORPG)',
          date: '2015',
        },
        {
          name: '35. Cards Against Humanity',
          date: '2015',
        },
        {
          name: '36. Town of Salem',
          date: '2015',
        },
        {
          name: '37. Yu-gi-oh',
          date: '2015',
        },
        {
          name: '38. CS Mobile (FPS)',
          date: '2015',
        },
        {
          name: '39. Dead Frontier',
          date: '2015',
        },
        {
          name: '40. Transformice',
          date: '2015',
        },
        {
          name: '41. Ground War: Tanks',
          date: '2015',
        },
        {
          name: '42. Stronghold Crusader',
          date: '2015',
        },
        {
          name: '43. LOTR: BME 2 - Rise of the Witch King',
          date: '2015',
        },
        {
          name: '44. Thirty Kingdoms (Grand Strategy)',
          date: '2015',
        },
        {
          name: '45. Warlight (Browser/ Grand Strategy)',
          date: '2015',
        },
        {
          name: '46. Battle Star Galática (RPG)',
          date: '2015',
        },
      ],
    },
    {
      dateJoined: '2016 (Entrada de Mariana)',
      games: [
        {
          name: '47. Heavendom Chronicles (RPG)',
          date: '2016-01',
        },
        {
          name: '48. Dungeon Siege 2 (ARPG)',
          date: '2016-01',
        },
        {
          name: '49. Titan Quest Imortal Throne (ARPG)',
          date: '2016-01',
        },
        {
          name: '50. Salem (Survival)',
          date: '2016-01',
        },
        {
          name: '51. The Guild 2 (RTS)',
          date: '2016-01',
        },
        {
          name: '52. Pixelmon (Sandbox)',
          date: '2016-02',
        },
        {
          name: '53. Dungeons Lords (RPG)',
          date: '2016-02',
        },
        {
          name: '54. Imposible Creatures (RTS)',
          date: '2016-03',
        },
        {
          name: '55. Factorio (RTS)',
          date: '2016-03',
        },
        {
          name: '56. Planetary Annihilation (RTS)',
          date: '2016-03',
        },
        {
          name: '57. Freelancer (RPG)',
          date: '2016-03',
        },
        {
          name: '58. Europa Universalis III (Grand Strategy)',
          date: '2016-04',
        },
        {
          name: '59. Victoria II (Grand Strategy)',
          date: '2016-04-28',
        },
        {
          name: '60. Neverwinter Nights 2 (RPG)',
          date: '2016-06',
        },
        {
          name: '61. Rise of Nations (RTS)',
          date: '2016-06',
        },
        {
          name: "62. Garry's mod (Sandbox)",
          date: '2016-07',
        },
        {
          name: '63. Pirates Vikings & Knights 2',
          date: '2016-07-13',
        },
        {
          name: '64. Company of Heroes (RTS)',
          date: '2016-09',
        },
        {
          name: '65. OSM (Browser)',
          date: '2016-11',
        },
        {
          name: '66. Tiger Knights',
          date: '2016-12-26',
        },
      ],
    },
    {
      dateJoined: '2017 (Entrada de Luís)',
      images: [{ url: '/bufogen.webp', label: 'Neorder (Bufo Gen)' }],
      games: [
        {
          name: '67. Heroes Evolved (MOBA)',
          date: '2017-01-10',
        },
        {
          name: '68. Brawlhalla',
          date: '2017-01',
        },
        {
          name: '69. Yu-gi-oh Duel Links (Cardgame)',
          date: '2017-01',
        },
        {
          name: '70. Shakes & Fidget',
          date: '2017-02',
        },
        {
          name: '71. Last Man Standing (FPS)',
          date: '2017-04',
        },
        {
          name: '72. Cloud Pirates',
          date: '2017-05',
        },
        {
          name: '73. Crossout',
          date: '2017-06-01',
        },
        {
          name: '74. Zero-K (RTS)',
          date: '2017-06',
        },
        {
          name: '75. Men of War: Assault squad 2 (RTS)',
          date: '2017-06',
        },
        {
          name: '76. Payday 2 (FPS)',
          date: '2017-06-09',
        },
        {
          name: '77. Pulsar: Lost Colony',
          date: '2017-06-11',
        },
        {
          name: '78. Paladins',
          date: '2017-06',
        },
        {
          name: '79. Helldivers',
          date: '2017-06',
        },
        {
          name: '80. Infestation: The New Z',
          date: '2017-10-08',
        },
        {
          name: '81. Fortnite',
          date: '2017-10-22',
        },
        {
          name: '82. Jackbox games',
          date: '2017-11-06',
        },
        {
          name: '83. StarCraft II',
          date: '2017-11-15',
        },
        {
          name: '84. Battlerite',
          date: '2017-11-23',
        },
        {
          name: '85. Warhammer End times – Vermintide',
          date: '2017-12-20',
        },
        {
          name: '86. Dying Light',
          date: '2017',
        },
      ],
    },
    {
      dateJoined: '2018 (Entrada de Tiago)',
      games: [
        {
          name: '87. Stellaris',
          date: '2018-01',
        },
        {
          name: '88. Of Guards and Thieves',
          date: '2018-01',
        },
        {
          name: '89. Deceit',
          date: '2018-01',
        },
        {
          name: '90. Life is Feudal',
          date: '2018-01',
        },
        {
          name: '91. Deep Rock Galactic',
          date: '2018-03',
        },
        {
          name: '92. Total War: Arena',
          date: '2018-03',
        },
        {
          name: '93. Crusader Kings 2',
          date: '2018-03',
        },
        {
          name: '94. Satellite Reign',
          date: '2018-04',
        },
        {
          name: '95. MechWarrior Online',
          date: '2018-04',
        },
        {
          name: '96. Besiege',
          date: '2018-05-20',
        },
        {
          name: '97. Raft',
          date: '2018-05-25',
        },
        {
          name: '98. Guns of Icarus',
          date: '2018-05-26',
        },
        {
          name: '99. The Forest',
          date: '2018-05-27',
        },
        {
          name: '100. World of Warcraft',
          date: '2018-05-31',
        },
        {
          name: '101. Totally Accurate Battlegrounds',
          date: '2018-07-07',
        },
        {
          name: '102. Counter-Strike: Global Offensive',
          date: '2018-08-06',
        },
        {
          name: '103. The Elder Scrolls: Online',
          date: '2018-09',
        },
        {
          name: '104. Sniper Elite 3',
          date: '2018-09',
        },
        {
          name: '105. Overkill’s The Walking Dead',
          date: '2018-12-28',
        },
      ],
    },
    {
      dateJoined: '2019 (Entrada de Pedro)',
      games: [
        {
          name: '106. Grand Theft Auto: Online',
          date: '2019',
        },
        {
          name: '107. Assassin’s Creed Unity',
          date: '2019',
        },
        {
          name: '108. Risk of Rain',
          date: '2019',
        },
        {
          name: '109. Destiny 2',
          date: '2019',
        },
        {
          name: '110. War Selection',
          date: '2019',
        },
        {
          name: '111. Don’t Starve Together',
          date: '2019',
        },
        {
          name: '112. Project Zomboid',
          date: '2019',
        },
      ],
    },
    {
      dateJoined: '2020',
      images: [{ url: '/xanniversary.webp', label: 'Neorder (X Anniversary)' }],
      games: [
        {
          name: '113. KARDS – The WWII Card Game',
          date: '2020-04-15',
        },
        {
          name: '114. Headsnatchers',
          date: '2020-04-25',
        },
        {
          name: '115. Dungeons & Dragons Online',
          date: '2020-04-25',
        },
        {
          name: '116. Scrap Mechanic',
          date: '2020-05-09',
        },
        {
          name: '117. Fallout 76',
          date: '2020-05-15',
        },
        {
          name: '118. Men of War II: Arena',
          date: '2020-07-30',
        },
        {
          name: '119. Borderlands 3',
          date: '2020-08-08',
        },
        {
          name: '120. Remnant: From the Ashes',
          date: '2020-08-20',
        },
        {
          name: '121. Warhammer: Vermintide 2',
          date: '2020-08-31',
        },
        {
          name: '122. Among Us',
          date: '2020-10-30',
        },
        {
          name: '123. TerraTech',
          date: '2020-11-01',
        },
        {
          name: '124. Barotrauma',
          date: '2020-11-03',
        },
      ],
    },
    {
      dateJoined: '2021 (Entrada de Murais)',
      games: [
        {
          name: '125. Grounded',
          date: '2021-01-24',
        },
        {
          name: '126. Valheim',
          date: '2021-02-07',
        },
        {
          name: '127. Stationeers',
          date: '2021-02-20',
        },
        {
          name: '128. Monster Hunter: World',
          date: '2021-02-24',
        },
        {
          name: '129. Astroneer',
          date: '2021-03-07',
        },
        {
          name: 'The Guild 3',
          date: '2021-03-08',
        },
        {
          name: '130. Enlisted',
          date: '2021-04',
        },
        {
          name: '131. State of Decay',
          date: '2021-05-31',
        },
        {
          name: '132. Operation Tango',
          date: '2021-06-04',
        },
        {
          name: '133. SpellForce 3: Soul Harvest',
          date: '2021-06-06',
        },
        {
          name: '134. Hearts of Iron IV',
          date: '2021-06-20',
        },
        {
          name: '135. Foxhole',
          date: '2021-06-28',
        },
        {
          name: '136. Parkitect',
          date: '2021-07-04',
        },
        {
          name: '137. Survivalist: Invisible Strain',
          date: '2021-07-19',
        },
        {
          name: '138. Crusader Kings III',
          date: '2021-07-23',
        },
        {
          name: '139. Hobo Tough Life',
          date: '2021-07-31',
        },
        {
          name: '140. The Ascent',
          date: '2021-08-01',
        },
        {
          name: '141. Orcs Must Die III',
          date: '2021-08-24',
        },
        {
          name: '142. Dungeons 3',
          date: '2021-09-13',
        },
        {
          name: '143. Call of Arms: Gates of Hell',
          date: '2021-10-03',
        },
        {
          name: '144. Police Simulator: Patrol Officer',
          date: '2021-10-09',
        },
      ],
    },
    {
      dateJoined: '2022',
      games: [
        {
          name: '145. Rim World (Multiplayer)',
          date: '2022-01-13',
        },
        {
          name: '146. Vintage Story',
          date: '2022-01-24',
        },
        {
          name: '147. Kingdoms Reborn',
          date: '2022-03-11',
        },
        {
          name: '148. Earth Defence Force 4.1',
          date: '2022-18-03',
        },
        {
          name: '149. Territorial.io',
          date: '2022-04-10',
        },
        {
          name: '150. Sea of Thieves',
          date: '2022-04-13',
        },
        {
          name: '151. Graven',
          date: '2022-04-13',
        },
        {
          name: '152. PokeMMO: Pokémon Black & White version',
          date: '2022-04-16',
        },
        {
          name: '153. V Rising',
          date: '2022-05-31',
        },
        {
          name: '154. Survivalist: the Invisible Strain',
          date: '2022-07-20',
        },
        {
          name: '155. Unrailed',
          date: '2022-08-24',
        },
        {
          name: '156. Scathe',
          date: '2022-09-14',
        },
        {
          name: '157. Lord of the Rings: War in the North',
          date: '2022-10-05',
        },
        {
          name: '158. Red solistice 2',
          date: '2022-10-17',
        },
        {
          name: '159. Skyrim Together',
          date: '2022-10-26',
        },
      ],
    },
    {
      dateJoined: '2023 (Entrada de Murais)',
      games: [
        {
          name: '160. Divinity 2',
          date: '2023-01-15',
        },
        {
          name: '161. Dungeons of Sundaria',
          date: '2023-01-31',
        },
        {
          name: '162. Elden Ring (Co-op)',
          date: '2023-03-18',
        },
        {
          name: '163. YLands',
          date: '2023-04',
        },
      ],
    },
    {
      dateJoined: '2024',
      games: [
        {
          name: '164. Mines of Moria',
          date: '2024-01-21',
        },
        {
          name: '165. Green Hell',
          date: '2024-02-20',
        },
        {
          name: '166. Monster Hunter Rise',
          date: '2024-02-21',
        },
        {
          name: '167. Palworld',
          date: '2024-03-03',
        },
        {
          name: '168. Heavenly Bodies',
          date: '2024-03-04',
        },
        {
          name: "169. Tiny Tina's Wonderland (co-op)",
          date: '2024-03-11',
        },
        {
          name: '170. Frostpunk',
          date: '2024-03-14',
        },
        {
          name: '171. Grim Dawn',
          date: '2024-03-25',
        },
        {
          name: "171. No Man's Sky",
          date: '2024-04-16',
        },
      ],
    },
  ];

  return (
    <Flex
      direction="column"
      id="teste"
      overflowX="hidden"
      scrollBehavior="smooth">
      <Box
        position="fixed"
        _after={{
          content: '""',
          display: 'block',
          pos: 'absolute',
          top: '0',
          left: '0',
          zIndex: '0',
          height: '100%',
          width: '100%',
          bg: 'rgba(139,0,0, 0.52)',
        }}
        sx={{
          '.content': {
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
          },
        }}
        zIndex="0">
        <video autoPlay muted loop className="content">
          <source className="content" src="/file.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box zIndex="11" position="fixed" top="0">
        <Flex p="2rem 4rem" w="100vw" justify="space-between">
          <ScrollLink to="teste" activeClass="active" spy smooth>
            <Image src="Neo.webp" />
          </ScrollLink>
          <Flex align="center">
            <ScrollLink to="teste" activeClass="active" spy smooth>
              <Button bg="#FFDE5F" borderRadius="10%">
                <Text color="black" textAlign="center" cursor="pointer">
                  Home
                </Text>
              </Button>
            </ScrollLink>
          </Flex>
        </Flex>
      </Box>
      <Flex
        h="100vh"
        w="100vw"
        zIndex="10"
        align="center"
        justify="center"
        position="relative"
        direction="column">
        <Image position="absolute" src="clock.gif" />
        <Text
          lineHeight="1.2em"
          textAlign="center"
          fontSize="5.3rem"
          w="30%"
          color="white">
          GAME TIMELINE
        </Text>
        <Text
          lineHeight="1.2em"
          textAlign="center"
          fontSize="1.18rem"
          w="30%"
          color="white"
          mt="2rem">
          The Played Games List
        </Text>
      </Flex>
      <Flex
        p="2rem 0"
        zIndex="10"
        direction="column"
        color="black"
        bg="linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 40%)"
        align="center">
        <Box w="50%">
          {data.map((item) => (
            <>
              <Text fontSize="1.25rem" pt="3rem" fontWeight="bold">
                {item.dateJoined} ({item.games.length} games)
              </Text>
              <Flex w="100%" justify="space-around" direction="row">
                {item.images?.map((image) => (
                  <Flex direction="column" mt="2rem" justify="flex-end">
                    <Image src={image.url} mt="1rem" w="auto" />
                    <Text textAlign="center">{image.label}</Text>
                  </Flex>
                ))}
              </Flex>
              <Flex direction="column" mt="2rem">
                {item.games.map((games) => (
                  <Flex direction="row" justify="space-between">
                    <Flex>
                      <Text pl="1rem">{games.name}</Text>
                    </Flex>
                    <Text pl="1rem">{games.date}</Text>
                  </Flex>
                ))}
              </Flex>
            </>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
}
