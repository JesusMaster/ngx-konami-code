
# Angular Konami Code Directive

Welcome to the Angular Konami Code Directive, the simplest and most entertaining way to integrate Easter eggs into your Angular 17+ applications! 

![App Screenshot](https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200226130410-20200226-konami-code.jpg)

### Overview
In the spirit of fun and engagement, this module breathes life into your Angular projects by allowing you to add hidden features or surprises that can be unlocked with the nostalgic Konami Code sequence. Whether it's unlocking a secret section, displaying a quirky animation, or revealing hidden content, this directive offers a unique way to enhance user experience and interaction.


## Getting Started

Incorporating the Angular Konami Code Directive into your project is easy. Here’s a quick start guide to get you up and running:

1.- Installation: Follow our simple installation instructions to add the directive to your Angular application.

```bash
  npm i ngx-konami-code
```
    

2.- Configuration: Easily configure the directive in your angular project.

- you can import the library in your Angular application, example on `app.component.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Import ngx-konami-code library
import { KonamiCodeModule } from 'ngx-konami-code';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,KonamiCodeModule], // Add the module in your imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  myfunction():void{
    alert("Easter eggs");
  }

}

```

3.- Enjoy: Watch as your users discover and enjoy the Easter eggs hidden within your application.

- with the previous steps yo can use the directive in `app.component.html`

```html
<div class="main" (konamicode)="myfunction()"></div>
```
## Contributing

Contributions are always welcome!

I believe in the power of community and contributions. Whether it's suggesting new features, improvements, or reporting bugs, your input is invaluable. 


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.



## 🔗 Links
- https://leiva.dev/ (Demo)
- https://github.com/JesusMaster/ngx-konami-code (github)

