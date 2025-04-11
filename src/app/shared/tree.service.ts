import { Injectable } from '@angular/core';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root',
})

export class TreeService {
  getTree(): Member {
    return {
      name: 'MUBIRA GITUNGO',
      generation: 1, // Root generation
      spouse: [
        this.createSpouse('Njoki wa Ragui',[
          this.createChild('Gitungo Mubira', 2, [], [
            this.createSpouse('Wamaitha', [
              this.createChild('Mwembu', 2),
              this.createChild('Mwihaki', 2),
              this.createChild('Nyakanini', 2),
              this.createChild('Mbugua', 2),
              this.createChild('Michael Ngugi (Kahonoki)', 2, [], [
                this.createSpouse('Waithira', [
                  this.createChild('Wamaitha', 3),
                  this.createChild('Karabi', 3),
                  this.createChild('Njoki', 3),
                  this.createChild('Waitiri', 3),
                  this.createChild('Kang"ori', 3),
                  this.createChild('Kamondia', 3),
                ]),
                this.createSpouse('Rachael Wambui', [
                  this.createChild('Wamaitha', 3),
                  this.createChild('Njuhi', 3),
                  this.createChild('Njoki', 3),
                  this.createChild('Watiri', 3),
                  this.createChild('Gitungo', 3),
                  this.createChild('Mbugua', 3),
                  this.createChild('David Njenga Ngugi', 3, [], [
                    this.createSpouse('Unkown', [
                      this.createChild('Michaelle Ngugi Njenga', 4, []),
                      this.createChild('Ian Mwaura Njenga', 4, []),
                    ])
                  ])
                ])
              ]),
              this.createChild('John Mbugua Gitungo', 2, [], [
                this.createSpouse('Eunice Wanjiku', [
                  this.createChild('Willie Njoroge Mbugua', 3, [], [
                    this.createSpouse('Gladwell Njeri Njoroge', [
                      this.createChild('Eunice Wanjiku', 4)
                    ])
                  ]),
                  this.createChild('Gladys Njoki Chege', 3, [], [
                    this.createChild('John Mbugua', 4),
                    this.createChild('Stanley Nguri', 4),
                    this.createChild('Grace Wanjiku', 4),
                    this.createChild('Eunice  Gaciku', 4),
                    this.createChild('John Kimani', 4),
                    this.createChild('Moses Gitungo', 4),
                    this.createChild('Serah Njeri', 4),
                    this.createChild('Esther Wamaitha', 4)
                  ]),
                  this.createChild('George Ngugi Mbugua', 3, [], [
                    this.createSpouse('Jane Muciru Ngugi', [
                      this.createChild('Eunice Wanjiku', 4),
                      this.createChild('Mary Wamaitha', 4),
                      this.createChild('Mercy Wangui', 4),
                      this.createChild('John Mbugua', 4)
                    ])
                  ]),
                  this.createChild('Esther Wamaitha Njau', 3, [
                    this.createChild('Eunice Wanjiku', 4),
                    this.createChild('Serah Wanjiku', 4),
                    this.createChild("David Wang'ondu", 4),
                    this.createChild('John Mbugua', 4),
                    this.createChild('Peninnah Wanja', 4),
                    this.createChild('Jedida Njeri', 4),
                  ]),
                  this.createChild('James Gitau Mbugua', 3, [], [
                    this.createSpouse('Janet Waithira Gitau', [
                      this.createChild('Wambui', 4),
                      this.createChild('Wanjiku', 4)
                    ])
                  ]),
                  this.createChild('Moses Gitungo Mbugua', 3, [], [
                    this.createSpouse('Rose Wambui Gitungo', [
                      this.createChild('John Mbugua', 4),
                      this.createChild('Joyce Wanjiku', 4),
                      this.createChild('George Muigai', 4),
                      this.createChild('Jerusha Njeri', 4)
                    ])
                  ]),
                ])
              ]),
            ])
          ]),
          this.createChild('Wahu', 2, []),
          this.createChild('Kanyiha', 2, [])
        ]),
        this.createSpouse('Karungari or Mwihaki', [        
          this.createChild("Peter Kang'atui Mubira", 2)
        ]),
        this.createSpouse('Wanjiru wa Kanja',[
          this.createChild('Gitungo Mubira', 2, [], [
            this.createSpouse('Jane Wambui (Wamucugia)', [
              this.createChild('Margeret Wanjiru', 3, [
                this.createChild('Peter Gitungo', 4, [], [
                  this.createSpouse('Rahab Nyambura', [
                    this.createChild('Lewis Ngugi', 5),
                    this.createChild('Vanessa Wanjiru', 5),
                    this.createChild('Wambui', 5)
                  ])
                ])
              ]),
              this.createChild('Geoffrey Kanja', 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild('Robert Gitungo', 4, [], [
                    this.createSpouse('Catherine', [
                      this.createChild('Nancy Wanjiru', 5),
                      this.createChild('Olivia Wanjiru', 5),
                      this.createChild('Joel Kanja', 5),
                    ])
                  ]),
                  this.createChild('Jane Wambui', 4, [
                    this.createChild('Kimani', 5),
                    this.createChild('Wanjiru', 5),
                    this.createChild('Kanja', 5)
                  ]),
                  this.createChild('Ruth Wairimu', 4, [
                    this.createChild('Wanjiku', 5),
                    this.createChild('Wanjiru', 5),
                    this.createChild('Michael Ngugi', 5)
                  ]),
                  this.createChild('Paul Njonde', 4, [], [
                    this.createSpouse('Beth Wanjiku', [
                      this.createChild('Mwangi', 5),
                      this.createChild('Wanjiru', 5),
                      this.createChild('Kanja', 5)
                    ])
                  ]),
                  this.createChild('Moses Ngugi', 4, [], [
                    this.createSpouse('Hilda Wambui', [
                      this.createChild('Geoffrey Kanja', 5),
                      this.createChild('Stacia Wanjiru', 5),
                      this.createChild('Njeri Shariel', 5)
                    ])
                  ])
                ])
              ]),
              this.createChild("Evan Ng'ang'a", 3, [], [
                this.createSpouse('Esther Wanjiku', [
                  this.createChild('James KAriuki', 4, [], [
                    this.createSpouse('Margaret Awanja', [
                      this.createChild("Ng'ang'a", 5),
                      this.createChild('Njuguna', 5)
                    ])
                  ]),
                  this.createChild('Fiona Wambui', 4, [
                    this.createChild('Enzel Munene', 5)
                  ]),
                  this.createChild('Anne Wahito', 4, [
                    this.createChild('John Chege', 5),
                    this.createChild('Zandra Waithera', 5)
                  ]),
                  this.createChild('Amos Gitungo', 4)
                ])
              ]),
              this.createChild('Moses Ngugi', 3, [], [
                this.createSpouse('Mary Wakonyo', [
                  this.createChild('Nicholas Gitungo', 4, [], [
                    this.createSpouse('Wanjiru', [
                      this.createChild('Kevin Kariuki', 5),
                      this.createChild('Ngugi', 5)
                    ])
                  ]),
                  this.createChild('Daniel Karanja', 4, [], [
                    this.createSpouse('Ann Nyakio', [
                      this.createChild('Jeremy Ngugi', 5),
                      this.createChild('Cynthia Wakonyo', 5),
                      this.createChild('Vaness Wambui', 5)
                    ])
                  ]),
                  this.createChild('Dorothy Wambui', 4, [
                    this.createChild('Maryann Waithira', 5),
                    this.createChild('Maureen Wakonyo', 5),
                    this.createChild('Michelle Wairimu', 5),
                    this.createChild('Leo John Maigua', 5)
                  ]),
                  this.createChild('George Mucugia', 4, [], [
                    this.createSpouse('Eunice Nduta', [
                      this.createChild('Moses Ngugi', 5),
                      this.createChild('Mary Wakonyo', 5),
                      this.createChild('Joyce Wachinga', 5)
                    ])
                  ]),
                  this.createChild('David Mwihaki', 4, [], [
                    this.createSpouse('Wanja', [
                      this.createChild('Ian Ngugi', 5),
                      this.createChild('Ivy Wakonyo', 5)
                    ])
                  ]),
                  this.createChild('Geoffrey Kanja', 4)
                ])
              ]),
              this.createChild('Eunice Mwihaki', 3, [
                this.createChild('John Kiarie', 4, [], [
                  this.createSpouse('Eunice Wanjiru', [
                    this.createChild('Mwihaki', 5),
                    this.createChild('Wanja', 5)
                  ])
                ]),
                this.createChild('George Gitungo', 4),
                this.createChild('Samuel Kimani', 4, [], [
                  this.createSpouse('Hannah Waithera', [
                    this.createChild('Boniface Kiarie', 5),
                    this.createChild('Lolaine Wangari', 5),
                    this.createChild('James Munyua', 5)
                  ])
                ]),
                this.createChild('Moses Ngugi', 4, [], [
                  this.createSpouse('Janet Ikuu', [
                    this.createChild('John Kiarie', 5),
                    this.createChild('Joy Mwihaki', 5)
                  ])
                ])
              ]),
              this.createChild('Rachael Wanja', 3, [
                this.createChild('Wanjiru', 4),
                this.createChild('Wambui', 4),
                this.createChild('Wangui', 4),
                this.createChild('Mbaire', 4),
                this.createChild('Mwihaki', 4),
                this.createChild("Ng'ndeo", 4),
                this.createChild('Wanjiki I', 4),
                this.createChild('Wanjiku II', 4),
                this.createChild('Wanjiku III', 4),
                this.createChild('Nyakio', 4),
                this.createChild('Umwe', 4),
                this.createChild('Mweru', 4),
                this.createChild('Kiarie', 4),
                this.createChild('Gitungo', 4),
                this.createChild('Njenga', 4)
              ]),
              this.createChild('Esther Nyakio', 3, [
                this.createChild('Jane Wambui', 4, [
                  this.createChild('Lawrence Gitungo', 5),
                  this.createChild('Ian Ngugi', 5)
                ]),
                this.createChild('Moses Gitungo', 4, [], [
                  this.createSpouse('Zippora Wangari', [
                    this.createChild('Brian Ngugi', 5),
                    this.createChild('Allan Wanyeki', 5)
                  ])
                ])
              ])
            ]),
            this.createSpouse('Lucy Wanjira (Wakamami)', [
              this.createChild('Stephen Ngugi', 3, [], [
                this.createSpouse('Nelly Nyokabi', [
                  this.createChild('Lucy Wanjira', 4),
                  this.createChild('Winnie Wanjuhi', 4, [
                    this.createChild('Nellie Nyokabi', 5),
                    this.createChild('Peter Mbugua', 5)
                  ]),
                  this.createChild('Hannah Wanjiru', 4, [
                    this.createChild('Nellie Nyokabi', 5),
                    this.createChild('Lucy Wanjira', 5, [
                      this.createChild('Nathan Mageria', 6)
                    ])
                  ]),
                  this.createChild('Gitungo Ngugi', 4),
                  this.createChild('Simon Gikonyo', 4, [], [
                    this.createSpouse('Zippy Nduta', [
                      this.createChild('Rahab Wanjiru', 5),
                      this.createChild('Nellie Nyokabi', 5),
                      this.createChild('Lucy Wanjira', 5)
                    ])
                  ]),
                  this.createChild('David Wamukuu', 4, [], [
                    this.createSpouse('Eddah Wanjiku', [
                      this.createChild('Ken Muiruri', 5),
                      this.createChild('Nellie Nyokabi', 5),
                      this.createChild('Jane Njeri', 5)
                    ])
                  ]),
                  this.createChild('Rose Wanja', 4),
                  this.createChild('Simon Mberere', 4, [], [
                    this.createSpouse('Esther Wambui', [
                      this.createChild('Peter Kimanga', 5)
                    ])
                  ])
                ])
              ]),
              this.createChild('Edward Wamukuu', 3, [], [
                this.createSpouse('Grace Wambui', [
                  this.createChild('Lucy Wanjira', 4, [
                    this.createChild('Nyokabi', 5),
                    this.createChild('Wanjiku', 5),
                    this.createChild('Wambui', 5),
                    this.createChild('Njeri', 5)
                  ]),
                  this.createChild('Fredrick Gitungo', 4, [], [
                    this.createSpouse('UNKNOWN', [
                      this.createChild('Moses Mungai', 5),
                      this.createChild('Edward Wamukuu', 5),
                      this.createChild('Peter Migwi', 5)
                    ])
                  ]),
                  this.createChild('Moses Mungai', 4),
                  this.createChild('Hannah Njoki', 4, [
                    this.createChild('Grace Wambui', 5)
                  ]),
                  this.createChild('Alice Wanjiru', 4, [
                    this.createChild('Edward Wamukuu', 5)
                  ]),
                  this.createChild('Stephen Ngugi', 4),
                  this.createChild('Julius Waruiru', 4, [], [
                    this.createSpouse('Grace Wanjiru', [
                      this.createChild('Susan Wambui', 5),
                      this.createChild('Wamukuu', 5)
                    ])
                  ])
                ])
              ]),
              this.createChild('Charles Gichuki', 3, [], [
                this.createSpouse('Emma Wanja', [
                  this.createChild('Lucy Wanjira', 4, [
                    this.createChild('Charles Gichuki', 5)
                  ]),
                  this.createChild('Miriam Wairimu', 4),
                  this.createChild('Ian Gitungo', 4),
                  this.createChild('Marina Wanjiru', 4)
                ])
              ]),
              this.createChild('Hannah Wanjiru', 3, [
                this.createChild('Gitungo', 4),
                this.createChild('Joyce', 4),
                this.createChild('Ngure', 4)
              ]),
              this.createChild('George Kanja', 3, [], [
                this.createSpouse('Serah', [
                  this.createChild('Solomon Gitungo', 4, [], [
                    this.createSpouse('UNKNOWN', [
                      this.createChild('Serah Wambui', 5),
                      this.createChild('Makena', 5)
                    ])
                  ]),
                  this.createChild('Waweru Kanja', 4, [], [
                    this.createSpouse('Susan Wangari', [
                      this.createChild('Kanja', 5),
                      this.createChild('Wambui', 5),
                      this.createChild('Njeri', 5)
                    ])
                  ]),
                  this.createChild('Mercy Wanjira', 4)
                ])
              ])
            ])
          ]),
          this.createChild('Kanja Mubira', 2),
        ]),
        this.createSpouse('Nyenjeri or Mugure',[
          this.createChild('Kagwathi Mubira', 2),
          this.createChild('Mungai Mubira', 2),
        ]),
        this.createSpouse('Gaceru Mubira',[
          this.createChild('Kungu Mubira', 2, [], [
            this.createSpouse('Leah Nyagaki', [
              this.createChild("Kimani Kung'u", 3, [], [
                this.createSpouse("Wambui Mburu", [
                  this.createChild("Christopher Kung'u", 4),
                  this.createChild("James Mburu", 4),
                  this.createChild("Ngigi", 4)
                ])
              ]),
              this.createChild("Chistine Wanjiku Kung'u", 3, [
                this.createChild("Joe Muchemi", 4)
              ]),
              this.createChild("James Kamau Kung'u", 3, [], [
                this.createSpouse("Serah Wambui Kung'u", [
                  this.createChild("Leah Nyagaki", 4),
                  this.createChild("Kung'u Kamau", 4)
                ])
              ]),
              this.createChild("Mercy Wanjiku Kung'u", 3, [
                this.createChild("Njugo Gitungo", 4),
                this.createChild("Leah Nyagaki", 4),
                this.createChild("Wanjiru", 4),
              ]),
              this.createChild("Francis Ngugi Kung'u" , 3, [], [
                this.createSpouse("UNKOWN", [
                  this.createChild("Kung'u Ngugi", 4)
                ])
              ]),
              this.createChild("Jane Mwihaki Kung'u", 3, [
                this.createChild("Leah Nyagaki", 4),
                this.createChild("Christopher Kung'u Ndichu", 4)
              ]),
              this.createChild("Njoki Kung'u", 3, [
                this.createChild("Nyagai ", 4),
                this.createChild("Njoroge", 4),
                this.createChild("Joan Wanjiku", 4)
              ]),
            ])
          ]),
          this.createChild('Kimani Mubira', 2, [], [
            this.createSpouse('Hannah Nyakio Kimani', [
              this.createChild("Elijah Kung'u", 3, [], [
                this.createSpouse("Mercy Wambui", [
                  this.createChild('Carolyne Nyakio', 4),
                  this.createChild('Samuel Kimani', 4),
                  this.createChild('Beth Nduta', 4),
                ])
              ]),
              this.createChild("John Muigai", 3),
              this.createChild("Simon Gitungo", 3),
              this.createChild("Joyce Wagitu Ngugi", 3),
              this.createChild("Johah karanja", 3),
              this.createChild("Salome Nyambura", 3),
              this.createChild("Faith Wanjiku Kamau", 3),
              this.createChild("Eunice Mwihaki", 3),
              this.createChild("Leornard Ngugi Kimani", 3),
              this.createChild("Martha Wambui", 3),
              this.createChild("Jane Wanja Kimani", 3)
            ]),
            this.createSpouse('Josephine Wanjiku Kimani', [
              this.createChild('James Mbugua', 3, [], [
                this.createSpouse('Muthoni Njonge', [
                  this.createChild('Kimani', 4),
                  this.createChild('Njonge', 4),
                  this.createChild('Ngugi', 4),
                  this.createChild('Muniu', 4),
                ])
              ]),
              this.createChild('Mary Njoki', 3),
              this.createChild('Robert Gitungo', 3),
              this.createChild('Joseph Wamuti', 3, [], [
                this.createSpouse('Lucy', [
                  this.createChild('Wanjiku', 4),
                  this.createChild('Wambui', 4),
                  this.createChild('Kimani', 4),
                ])
              ]),
              this.createChild('David Ngugi', 3, [], [
                this.createSpouse('Wambui Nderitu', [
                  this.createChild('Samuel Kimani', 4),
                  this.createChild('Ndiritu', 4),
                  this.createChild('Wamuti', 4),
                ])
              ]),
            ])
          ]),
          this.createChild('Mwihaki Mubira', 2, [
            this.createChild('Ngugi Kabogo', 3),
            this.createChild("Muthoni Kung'u", 3),
            this.createChild('Wagio Njoroge', 3),
            this.createChild('Muthema', 3)
          ])
        ]),
        this.createSpouse('Wanjiku Mubira (Wauci/Githua)',[
          this.createChild('Maigua', 2),
          this.createChild('Samuel Kamau Mubira', 2, [] ,[
            this.createSpouse('Penninah Njoki Kamau', [
              this.createChild('Wanjiku Ngaruiya (Wauci)', 3, [
                this.createChild('Waruiru', 4),
                this.createChild('Mercy Wathoni', 4),
                this.createChild('Njoki Mbugua', 4),
                this.createChild('Kamau', 4),
                this.createChild('Muciru', 4),
                this.createChild('Gitau', 4)
              ]),
              this.createChild('Francis Mburu Kamau', 3, [], [
                this.createSpouse('Njeri', [
                  this.createChild('Brenda Njoki', 4, [
                    this.createChild('Ethan Mburu', 5)
                  ]),
                  this.createChild('Christine Mugure', 4),
                  this.createChild('Eric Kamau Mburu', 4),
                  this.createChild('Catherine Wanjiku', 4, [
                    this.createChild('Mburu', 5)
                  ])
                ])
              ]),
              this.createChild('Joyce Wanjiru', 3, [
                this.createChild('Rose Nduta', 4),
                this.createChild('Ann Njoki', 4),
                this.createChild('Kamau', 4),
                this.createChild('Kamau', 4),
                this.createChild('Wanjiku', 4)
              ]),
              this.createChild('Esther Mwihaki', 3),
              this.createChild('Moses Ngugi Kamau', 3, [], [
                this.createSpouse('Roxana Wanjai', [
                  this.createChild('Samuel Kamau Ngugi', 4),
                  this.createChild('Penninah Njoki', 4, [
                    this.createChild('Ahadi Wanjai', 5)
                  ]),
                  this.createChild('Kenneth Kigathi Ngugi', 4),
                  this.createChild('Christine Waruga', 4),
                  this.createChild('Francis Mburu Ngugi', 4)
                ])
              ]),
              this.createChild('Bernice Muthoni', 3, [
                this.createChild('Christine Wambui', 4),
                this.createChild('Fiona Njoki', 4)
              ]),
              this.createChild('Rose Wambui', 3, [
                this.createChild('Ann Njoki', 4),
                this.createChild('Elizabeth Wanjiku', 4)
              ])
            ]),
            this.createSpouse('Leah Wania Kamau', [
              this.createChild('Wajniku Gichanga',3, [
                this.createChild("Kang'ethe", 4),
                this.createChild('Wamuchii', 4),
                this.createChild('Mburu', 4),
                this.createChild('Ngugi', 4),
                this.createChild('Mwaura', 4),
                this.createChild('Samuel Kamau', 4)
              ]),
              this.createChild('Wathoni',3, [
                this.createChild('Wanjiku', 4),
                this.createChild('Kamau', 4),
                this.createChild('Wanja', 4),
                this.createChild('Fundi', 4),
                this.createChild('Mwaura', 4),
                this.createChild('Wanjiru', 4)
              ]),
              this.createChild('Mbaire',3, [
                this.createChild('Gichuhi', 4),
                this.createChild('Wanja', 4),
                this.createChild('Mukono', 4)
              ]),
              this.createChild('Susan Mwaniki',3, [
                this.createChild('Gitau', 4),
                this.createChild('Serah', 4),
                this.createChild('Wanjiku', 4),
                this.createChild('Kamau', 4)
              ]),
              this.createChild('Mwihaki',3, [
                this.createChild('Eric Kamau', 4),
                this.createChild('Robinson Juba', 4),
                this.createChild('Catherine Achenga', 4)
              ]),
              this.createChild('Jeniffer Wairimu',3, [
                this.createChild('Leah', 4),
                this.createChild('Wanja', 4),
                this.createChild('Kamau', 4),
                this.createChild('Muthoni', 4),
                this.createChild('Karanja', 4)
              ]),
              this.createChild('Charles Gitungo Kamau',3 , [], [
                this.createSpouse('Muthoni', [
                  this.createChild('Muthoni', 4),
                  this.createChild('Kamau Gitungo', 4),
                  this.createChild('Leah Wania', 4),
                  this.createChild('Kubai Gitungo', 4),
                  this.createChild('Njuguna Gitungo', 4),
                  this.createChild('Muthoni Kubai', 4),
                  this.createChild('Faith Njeri', 4),
                ])
              ]),
            ]),
            this.createSpouse('Serah Wanjiku Kamau', [
              this.createChild('Kennedy Ngugi Kamau', 3, [], [
                this.createSpouse('Grace Waithira', [
                  this.createChild('Serah Wanjiru', 4),
                  this.createChild('Nduta', 4, [
                    this.createChild('Waithira', 5)
                  ]),
                  this.createChild('Wanjiru', 4, [
                    this.createChild('Mophat Ngugi Wanjiru', 5)
                  ]),
                  this.createChild('Wambui', 4, [
                    this.createChild('Kennedy Ngugi Wanjiru', 5)
                  ]),
                  this.createChild('Samuel Kamau Ngugi', 4)
                ])
              ]),
              this.createChild('George Mbugua Kamau', 3, [], [
                this.createSpouse('Mary Njeri', [
                  this.createChild('Carol Wanjiru', 4),
                  this.createChild('Wambui', 4),
                  this.createChild('Samuel Kamau Mbugua', 4),
                  this.createChild('Wanjiku', 4)
                ])
              ]),
              this.createChild('Emily Wambui Kamau', 3, [
                this.createChild('Larrick', 4),
                this.createChild('Janet', 4)
              ]),
              this.createChild('Daniel Gitungo Kamau (Manager)', 3, [], [
                this.createSpouse('Catherine Marugu', [
                  this.createChild('Serah Wanjiru', 4),
                  this.createChild('Samuel Kamau Gitungo', 4),
                  this.createChild('Muthoni', 4),
                  this.createChild('Wanjiku', 4)
                ])
              ]),
              this.createChild('Ruth Njeri', 3, [
                this.createChild('Susan Wanjiru', 4)
              ]),
              this.createChild('Njunge', 3, [], [
                this.createSpouse('Mercy Wanjiru', [
                  this.createChild('Waithera', 4),
                  this.createChild('Ndinda', 4),
                  this.createChild('Waitha', 4),
                ])
              ]),
              this.createChild('Esther Mbaire', 3),
              this.createChild('Maigua', 3, [], [
                this.createSpouse('Wahu', [
                  this.createChild('Wanjiru', 4),
                  this.createChild('Wairimu', 4)
                ])
              ]),
              this.createChild('Mathew Njenga Kamau', 3, [], [
                this.createSpouse('Frida Kari', [
                  this.createChild('Samuel Kamau Njenga', 4),
                  this.createChild('Christopher Karani Njenga', 4),
                ])
              ]),
            ])
          ]),
        ]),
        this.createSpouse("Njoki wa King'ang'i",[
          this.createChild("Stephen King'ang'i Mubira", 2, [], [
            this.createSpouse('Hannah Wanjiku', [
              this.createChild("Edward Ngugi King'ang'i", 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild('Paul Mungai', 4),
                  this.createChild('Ann Wanjiku', 4),
                  this.createChild("Antony King'angi", 4),
                  this.createChild("Sally Kahaki", 4)
                ])
              ]),
              this.createChild("Evan Katundu Kingang'ngi", 3, [], [
                this.createSpouse('UNKOWN', [
                  this.createChild("Alice Wanjiku", 4),
                  this.createChild("John King'ngi", 4),
                  this.createChild("Lucy Wambui", 4),
                  this.createChild("Regina Njoki", 4),
                  this.createChild("Damaris Wanjiku", 4),
                  this.createChild("Mungai Gatundu", 4),
                ])
              ]),
              this.createChild("Regina Njoki King'ngi", 3, [
                this.createChild("Wariara Kimaara", 4),
                this.createChild("Ann Wanjiku", 4),
                this.createChild("Waweru", 4),
                this.createChild("Karii", 4)
              ]),
              this.createChild("Gladys Wanjiru King'angi", 3, [
                this.createChild("Mathu Ngugi", 4),
                this.createChild("Anthony Kuria", 4),
                this.createChild("Eric King'angi", 4),
                this.createChild("Ngugi", 4)
              ]),
              this.createChild("Jeniffer Mwihaki King'angi", 3, [
                this.createChild("Maria Wanjiku", 4),
                this.createChild("Thairu", 4),
                this.createChild("Wanjiku", 4)
              ]),
              this.createChild("Judy Wataku King'angi", 3, [
                this.createChild("Gladys Njeri", 4),
                this.createChild("Eva Wanjiku", 4),
                this.createChild("Jackline Wanjiku", 4)
              ]),
              this.createChild("Gideon Gitungo King'angi", 3, [], [
                this.createSpouse("Marion Wanjiku", [
                  this.createChild("Ann Sheila", 4),
                  this.createChild("Eva Wanjiku", 4),
                  this.createChild("Jackline Wanjiku", 4)
                ])
              ]),
              this.createChild("Josephine Njeri Kingang'i", 3),
              this.createChild("Jane", 3, [
                this.createChild("Ndung'u", 4),
                this.createChild('Joyce Wangari', 4)
              ]),
              this.createChild("Grace Njeri King'angi", 3, [
                this.createChild('Njoroge Mungai', 4),
                this.createChild('Joan Njeri', 4)
              ]),
              this.createChild("Nicholas Kung'u King'angi", 3, [], [
                this.createSpouse('Wanjiku', [
                  this.createChild("Lewis King'ang'i", 4),
                  this.createChild('Marvin Ngugi', 4),
                  this.createChild("Wanjiku Kung'u", 4),
                  this.createChild("Mukami Kung'u", 4),
                  this.createChild('John Kinyanjui', 4)
                ])
              ]),
              this.createChild("Leonard Gitu King'angi", 3, [], [
                this.createSpouse('Margaret Waithira', [
                  this.createChild('Patricia Wanjiku', 4),
                  this.createChild("Stephen King'ang'i", 4),
                  this.createChild('EdwAard Muthama', 4)
                ])
              ]),
              this.createChild("Josephine Njeri", 3)
            ]),
            this.createSpouse('Rachael Njeri', [
              this.createChild("Elizabeth Njoki King'ang'i", 3, [
                this.createChild("Joseph King'ang'i", 4),
                this.createChild("David Ngugi", 4),
                this.createChild("Kimani Njoki", 4)
              ]),
              this.createChild("Mugure King'ang'i", 3, [
                this.createChild("Waithera Muigai", 4),
                this.createChild("King'ang'i Muigai", 4)
              ]),
              this.createChild("Edwin Ngugi King'ang'i", 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild("Elizabeth Njeri", 4),
                  this.createChild("Hannah Wairimu", 4),
                  this.createChild("Stephen King'ang'i", 4)
                ])
              ]),
              this.createChild("Esther Njoki King'ang'i", 3, [
                this.createChild("Kang'ethe Njeri", 4)
              ]),
              this.createChild("James Kimani King'ang'i", 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild("King'ang'i Kimani", 4),
                  this.createChild("Kahuria Kimani", 4),
                  this.createChild("Denis Ngugi", 4)
                ])
              ]),
              this.createChild("Peter Gitungo King'ang'i", 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild("Charles Kimenyi", 4),
                  this.createChild("Stephen King'ang'i", 4),
                  this.createChild("Ngugi Gitungo", 4)
                ])
              ]),
              this.createChild("Pauline Muthoni King'ang'i", 3, [
                this.createChild("King'ang'i Muthoni", 4)
              ]),
              this.createChild("Priscilla Wangui King'ang'i", 3, [
                this.createChild('Njeri Wangui', 4)
              ]),
              this.createChild("Ann Wanjiru King'ang'i", 3, [
                this.createChild('Rachael Njeri', 4),
                this.createChild('Caroline Sato', 4)
              ])
            ]),
            this.createSpouse('Rosemary Njoki', [
              this.createChild("Harison Ngugi King'ang'i", 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild("Elizabeth Ngugi", 4),
                  this.createChild("Rosemary Njoki", 4),
                  this.createChild("Elizabeth Njango", 4)
                ])
              ]),
              this.createChild("Joseph Kiriro King'ang'i", 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild("Stephen King'ang'i", 4),
                  this.createChild("Rosemary Njoki", 4),
                  this.createChild("Elizabeth Njango", 4)
                ])
              ]),
              this.createChild("Elizabeth Njango King'ang'i", 3),
              this.createChild("Nancy Wangui King'ang'i", 3, [
                this.createChild('Rosemary Njango', 4)
              ]),
              this.createChild("Jennifer Kahaki King'ang'i", 3),
              this.createChild("Gideon Peter G. King'ang'i", 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild("Wilfred Mwaura", 4),
                  this.createChild("Rosemary Njoki", 4),
                  this.createChild("Stephen King'ang'i", 4),
                  this.createChild("Harrison Ngugi", 4),
                  this.createChild("Ken", 4),
                  this.createChild("Joseph Njehu", 4)
                ])
              ]),
              this.createChild("Wanjiku King'ang'i", 3, [
                this.createChild("King'ang'i Njehu", 4),
                this.createChild("Ng'ang'a Njehu", 4)
              ]),
              this.createChild("Jennifer Kahaki King'ang'i", 3)
            ]),
          ]),
          this.createChild('George Gitu Mubira', 2, [], [
            this.createSpouse('UNKNOWN', [
              this.createChild('Jane Mwihaki Nduati', 3, [
                this.createChild('Nduati Gitau', 4),
                this.createChild('Waitherero Gitau', 4)
              ]),
              this.createChild("John King'ang'i Gitu", 3, [], [
                this.createSpouse("Beth Wanjiru King'ang'i", [
                  this.createChild("George Gitu King'ang'i", 4),
                  this.createChild("Maryanne Nyokabi King'ang'i", 4)
                ]),
              ]),
              this.createChild("Peter Kang'ata Gitu", 3),
              this.createChild('Joys Wanjiru De Graaf', 3, [
                this.createChild('Ivonne Eleonor Nyokabi De Graaf', 4),
                this.createChild('Mitchelle Caroline Njoki De Graaf', 4)
              ]),
              this.createChild('Geoffrey Gitungo Gitu', 3, [], [
                this.createSpouse('Grace Wagio Gitungo', [
                  this.createChild('George Gitu Gitungo', 4),
                  this.createChild('Esther Nyokabi Gitungo', 4)
                ])
              ]),
              this.createChild('Frank Bob Muigai Gitu', 3, [
                this.createChild('Esther Nyokabi Muigai', 4),
                this.createChild('Antony George Gitu Muigai', 4),
                this.createChild('Kevin Jeremiah Kinyanjui Muigai', 4)
              ]),
              this.createChild('James Ngugi Gitu', 3, [], [
                this.createSpouse('Edith Nyambura Ngugi', [
                  this.createChild('George Gitu Ngugi', 4),
                  this.createChild('Everlyne Nyokabi Ngugi', 4),
                  this.createChild('Brian Njoroge Ngugi', 4),
                ])
              ]),
              this.createChild('Loise Nyokabi Kimani', 3, [
                this.createChild('Antony Kibunja', 4),
                this.createChild('Leonard George Gitu', 4)
              ]),
              this.createChild('Alice Wangari Gitu', 3, [
                this.createChild('Louis George Gitu', 4)
              ]),
              this.createChild('Judy Muthoni Muchina', 3, [
                this.createChild('Martin Mugo Mucina', 4)
              ]),
              this.createChild('Grace Njeri Gitau', 3),
              this.createChild('Kenneth Kiarie Gitau', 3, [], [
                this.createSpouse('Jane Njeri Kiarie', [
                  this.createChild('Charlene Nyokabi Kiarie', 4),
                  this.createChild('George Gitu Kiarie', 4)
                ])
              ]),
              this.createChild('Njoroge Ngugi Gitu', 3)
            ]),
          ]),
        ]),
        this.createSpouse('Wabiri',[]),
      ],
      children: [],
      showChildren: false,
      showSpouse: false,
    };
  }

  // Helper function to create child member objects with optional spouses and children
  private createChild(name: string, generation: number, children: Member[] = [], spouse: Member[] = []): Member {
    return {
      name,
      generation,
      children,
      spouse,
      showChildren: false,
      showSpouse: false,
    };
  }

  // Helper function to create spouse member objects
  private createSpouse(name: string, children: Member[] = []): Member {
    return {
      name,
      children,
      showChildren: false,
      showSpouse: false
    };
  }
}
