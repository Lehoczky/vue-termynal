# Components

## Terminal

The terminal is the container of each line. You can specify properties on the terminal that will be used as default values for it's children.

The following props are available:

| Name              | Type    | Default | Description                                                     |
| ----------------- | ------- | ------- | --------------------------------------------------------------- |
| `startDelay`      | number  | `600`   | Delay before animation, in ms.                                  |
| `typeDelay`       | number  | `90`    | Delay between each typed character, in ms.                      |
| `lineDelay`       | number  | `1500`  | Delay between each line, in ms.                                 |
| `progressLength`  | number  | `40`    | Number of characters displayed as progress bar.                 |
| `progressChar`    | string  | `'█'`   | Character to use for progress bar.                              |
| `progressPercent` | number  | `100`   | Max percent of progress.                                        |
| `progressDelay`   | number  | `90`    | Delay between each progress character, in ms.                   |
| `cursor`          | string  | `'▋'`   | Character to use for cursor.                                    |
| `lazy`            | boolean | `false` | Only start the animation when the terminal enters the viewport. |
| `forwardButton`   | boolean | `false` | Whether to a show the fast forward button.                      |
| `restartButton`   | boolean | `false` | Whether to a show the restart button.                           |

## Text

Simple output, no typing.

Props: `lineDelay`

Example:

```html
<v-termynal>
  <vt-text>Hello there!</vt-text>
</v-termynal>
```

<v-termynal :line-delay="0" :start-delay="0">
  <vt-text>Hello there!</vt-text>
</v-termynal>

## Input

Simple prompt with animated user input and cursor.

Props: `lineDelay`, `typeDelay`, `prompt`

The prompt specifies the characters that are displayed before each line, for example, to indicate command line inputs or interpreters (like >>> for Python). By default, Termynal displays a `$` before each user input line.

Example:

```html
<v-termynal>
  <vt-input>the default input</vt-input>
  <vt-input prompt=">>>">python prompt</vt-input>
  <vt-input prompt="(.env)">custom env prompt</vt-input>
</v-termynal>
```

<v-termynal :line-delay="0" :start-delay="0" :type-delay="0">
  <vt-input>the default input</vt-input>
  <vt-input prompt=">>>">python prompt</vt-input>
  <vt-input prompt="(.env)">custom env prompt</vt-input>
</v-termynal>

## Progress

Animated progress bar.

Props: `lineDelay`, `progressLength`, `progressChar`, `progressPercent`, `progressDelay`

Example:

```html
<v-termynal>
  <vt-progress />
  <vt-progress :progress-length="45" progress-char="." />
  <vt-progress :progress-percent="69" />
</v-termynal>
```

<v-termynal :line-delay="0" :start-delay="0" :progress-delay="0">
  <vt-progress />
  <vt-progress :progress-length="45" progress-char="."/>
  <vt-progress :progress-percent="69" />
</v-termynal>
