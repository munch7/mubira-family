export interface FamilyNode {
  name: string;
  spouse?: FamilyNode[]; // Make spouse optional
  children?: FamilyNode[];
}
export const familyTree = {
  name: 'Mubira',
  spouse: [
    { name: 'First wife',
      children: [
        { name: 'Kanja Mubira' },
        { name: "Peter Kang'atui Mubira" },
        { name: 'Mungai Mubira' },
        { name: 'Kimani Mubira'},
        { name: 'Michael Ngugi (Kahonoki)'},
        { name: 'Samuel Kamau',
          spouse: [
            { name: 'Penninah Njoki Kamau',
              children: [
                { name: 'wauci',
                  children: [
                    { name: 'Mercy Wathoni' },
                    { name: 'Waruiru' },
                    { name: 'Muciru' },
                    { name: 'Kamau' },
                    { name: 'Wanjiku' },
                    { name: 'Gitau' },
                    { name: 'Ngugi' },
                  ]
                },
                { name: 'Francis Mburu Kamau & Njeri',
                  spouse: [
                    { name: 'Njeri',
                      children: [
                        { name: 'Brenda Njoki',
                          children: [
                            { name: 'Ethan Mburu' }
                          ]
                        },
                        { name: 'Christine Mugure' },
                        { name: 'Eric Kamau Mburu' },
                        { name: 'Catherine Wanjiku',
                          children: [
                            { name: 'Mburu' }
                          ]
                        },
                      ]
                    },
                  ],
                },
                { name: 'Joyce Wanjiru',
                  children: [
                    { name: 'Rose Nduta' },
                    { name: 'Ann Njoki' },
                    { name: 'Kamau' },
                    { name: 'Kamau' },
                    { name: 'Wanjiku' },
                  ]
                },
                { name: 'Esther Mwihaki' },
                { name: 'Moses Ngugi Kamau',
                  spouse: [
                    { name: 'Roxana Wanjai',
                      children: [
                        { name: 'Samuel Kamau Ngugi' },
                        { name: 'Penninah Njoki',
                          children: [
                            { name: 'Ahadi Wanjai' }
                          ]
                        },
                        { name: 'Kenneth Kigathi Ngugi' },
                        { name: 'Christine Waruga' },
                        { name: 'Francis Mburu Ngugi' },
                      ]
                    }
                  ]
                },
                { name: 'Bernice Muthoni',
                  children: [
                    { name: 'Christine Wambui' },
                    { name: 'Fiona Njoki' },
                  ]
                },
                { name: 'Rose Wambui',
                  children: [
                    { name: 'Ann Njoki' },
                    { name: 'Elizabeth Wanjiku' },
                  ]
                }
              ]
            },
            { name: 'Leah Wania Kamau',
              children: [
                { name: 'Wathoni',
                  children: [
                    { name: '' }
                  ]
                },
                { name: 'Susan',
                  children: [
                    { name: '' }
                  ]
                },
                { name: 'Mbaire',
                  children: [
                    { name: '' }
                  ]
                },
                { name: 'Wairimu',
                  children: [
                    { name: '' }
                  ]
                },
                { name: 'Charles Gitungo Kamau',
                  children: [
                    { name: 'Kamau' },
                    { name: 'Leah Wania Gitungo' },
                    { name: 'Kubai' },
                    { name: 'Njuguna' },
                    { name: 'Faith Njeri' }
                  ]
                }
              ]
            },
            { name: 'Serah Wanjiku Kamau',
              children: [
                { name: 'Kennedy Ngugi Kamau',
                  spouse: [
                    { 
                      name: '',
                      children: [
                        { name: 'Wanjiru' },
                        { name: 'Nduta' },
                        { name: 'Wanjiru',
                          children: [
                            { name: 'Mophat Ngugi Wanjiru' }
                          ]
                        },
                        { name: 'Wambui' },
                        { name: 'Samuel Kamau Ngugi' }
                      ]
                    }
                  ]
                },
                { name: 'George Mbugu Kamu',
                  spouse: [
                    { 
                      name: '',
                      children: [
                        { name: 'Carol Wanjiru' },
                        { name: 'Wambui' },
                        { name: 'Samuel Kamau Mbugua' },
                        { name: 'Wanjiku' }
                      ]
                    }
                  ]
                },
                { name: 'Emily Wambui Kamau' },
                { name: 'Charles Gitungo (Manager)',
                  spouse: [
                    { 
                      name: '',
                      children: [
                        { name: 'Wanjiru' },
                        { name: 'Kamau Gitungo' },
                        { name: 'Muthoni' },
                        { name: 'Wanjiku' }
                      ]
                    }
                  ]
                },
                { name: 'Njeri',
                  children: [
                    { 
                      name: 'Susan Wanjiru',
                      children: [
                        { name: '' }
                      ]
                    }
                  ]
                },
                { name: 'Njunge',
                  spouse: [
                    { 
                      name: '',
                      children: [
                        { name: '' }
                      ]
                    }
                  ]
                },
                { name: 'Esther Mbaire' },
                { name: 'Maigua',
                  spouse: [
                    { 
                      name: '',
                      children: [
                        { name: '' },
                        { name: '' },
                      ]
                    }
                  ]
                },
                { name: 'Mathew Njenga Kamau',
                  spouse: [
                    { 
                      name: '',
                      children: [
                        { name: 'Kamau Njenga' },
                        { name: 'Christopher Karani Njenga' }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        },
        { name: 'Gitu Mubira',
          spouse: [
            { name: '',
              children: [
                { name: 'Alice Wangari Gitu',
                  children: [
                    { name: 'Louis George Gitu' }
                  ]
                }
              ]
            }
          ]
        },
        { name: "Stephen King'ang'i Mubira" },
        { name: 'Kungu Mubira' },
        { name: 'Gitungo Mubira' },
        { name: 'Kaguathi Mubira' }
      ]
    },
    { name: 'Second wife' }
  ]
};
  