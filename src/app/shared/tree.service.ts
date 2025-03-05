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
          this.createChild('Peter Kang\'atui Mubira', 2),
          // this.createChild('Stephen King\'ang\'i Mubira', 2),
        ]),
        this.createSpouse('Wanjiru wa Kanja',[
          this.createChild('Gitungo Mubira', 2),
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
            ])
          ]),
          this.createChild('Mwihaki Mubira', 2)
        ]),
        this.createSpouse('Githua or Wauci',[
          this.createChild('Maigua', 2),
          this.createChild('Samuel Kamau', 2, [] ,[
            this.createSpouse('Penninah Njoki Kamau', [
              this.createChild('wauci', 3, [
                this.createChild('Mercy Wathoni', 4),
                this.createChild('Waruiru', 4),
                this.createChild('Muciru', 4),
                this.createChild('Kamau', 4),
                this.createChild('Wanjiku', 4),
                this.createChild('Gitau', 4),
                this.createChild('Ngugi', 4)
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
              this.createChild('Wathoni',3),
              this.createChild('Susan',3),
              this.createChild('Mbaire',3),
              this.createChild('Wairimu',3),
              this.createChild('Charles Gitungo Kamau',3 , [], [
                this.createSpouse('UNKOWN', [
                  this.createChild('Kamau Gitungo', 4),
                  this.createChild('Leah Wania', 4),
                  this.createChild('Kubai Gitungo', 4),
                  this.createChild('Njuguna Gitungo', 4),
                  this.createChild('Faith Njeri', 4),
                ])
              ]),
            ]),
            this.createSpouse('Serah Wanjiku Kamau', [
              this.createChild('Kennedy Ngugi Kamau', 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild('Wanjiru', 4),
                  this.createChild('Nduta', 4, [
                    this.createChild('Waithira', 5)
                  ]),
                  this.createChild('Wanjiru', 4, [
                    this.createChild('Mophat Ngugi Wanjiru', 5)
                  ]),
                  this.createChild('Wamboi', 4, [
                    this.createChild('Kennedy Ngugi Wanjiru', 5)
                  ]),
                  this.createChild('Samuel Kamau Ngugi', 4)
                ])
              ]),
              this.createChild('George Mbugua Kamau', 3, [], [
                this.createSpouse('UNKKNOWN', [
                  this.createChild('Carol Wanjiru', 4),
                  this.createChild('Wambui', 4),
                  this.createChild('Samuel Kamau Mbugua', 4),
                  this.createChild('Wanjiku', 4)
                ])
              ]),
              this.createChild('Emily Wambui Kamau', 3,),
              this.createChild('Charles Gitungo Kamau (Manager)', 3, [], [
                this.createSpouse('UNKNOWN', [
                  this.createChild('Wanjiru', 4),
                  this.createChild('Kamau Gitungo', 4),
                  this.createChild('Muthoni', 4),
                  this.createChild('Wanjiku', 4)
                ])
              ]),
              this.createChild('Njeri', 3, [
                this.createChild('Susan Wanjiru', 4)
              ]),
              this.createChild('Njunge', 3),
              this.createChild('Esther Mbaire', 3),
              this.createChild('Maigua', 3),
              this.createChild('Mathew Njenga Kamau', 3, [], [
                this.createSpouse('UNKOWN', [
                  this.createChild('Kamau Njenga', 4),
                  this.createChild('Christopher Karani Njenga', 4),
                ])
              ]),
            ])
          ]),
        ]),
        this.createSpouse("Njoki wa King'ang'i",[
          this.createChild('Kingangi', 2),
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
