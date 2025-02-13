import { Injectable } from '@angular/core';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root',
})

export class TreeService {
  getTree(): Member {
    return {
      name: 'MUBIRA',
      generation: 1, // Root generation
      spouse: [
        this.createSpouse('Njoki wa Ragui',[
          this.createChild('Gitungo', 2, [], [
            this.createSpouse('Wamaitha', [
              this.createChild('Michael Ngugi (Kahonoki)', 2),
              this.createChild('John Mbugua', 3)
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
        this.createSpouse('Gaceru',[
          this.createChild('Kungu Mubira', 2),
          this.createChild('Kimani Mubira', 2, [], [
            this.createSpouse('UNKNOWN', [
              this.createChild('David Ngugi Kimani', 3, [], [
                this.createSpouse('UNKOWN', [
                  this.createChild('Josephine Wanjiku Ngugi', 4)
                ])
              ])
            ])
          ]),
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
              this.createChild('Alice Wangari Gitu', 3, [
                this.createChild('Louis George Gitu', 4)
              ]),
              this.createChild('James Ngugi Gitu', 3, [], [
                this.createSpouse('Edith Nyambura Ngugi', [
                  this.createChild('George Gitu Ngugi', 4),
                  this.createChild('Everlyne Nyokabi Ngugi', 4),
                  this.createChild('Brian Njoroge Ngugi', 4),
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
