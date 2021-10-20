# frozen_string_literal: true

Greeting.destroy_all

Greeting.create([
                  { message: 'Hello, World!' },
                  { message: 'Yo, World!' },
                  { message: 'Wassup, World!' },
                  { message: 'Sup, World!' },
                  { message: 'What\'s up, World!' }
                ])
