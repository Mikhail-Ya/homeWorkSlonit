# Руководство по оформлению:
***
## Заголовки
- `#` - решетка обозначает заголовок.
- количество решеток определяют уровень заголовка.
Количество уровней заголовков 6 (шесть)
#### _Пример_:
> # Заголовок 1 уровня
> ## Заголовок 2 уровня
> ### Заголовок 3 уровня
> #### Заголовок 4 уровня
> ##### Заголовок 5 уровня
> ###### Заголовок 6 уровня

---

## Выделения текста:

```c
 курсивом (наклонным): _текст_ || *текст*
---------------------------------------------
 жирным шрифтом:      __текст__ || **текст**
---------------------------------------------
 жирным курсивом:   ___текст___ || ***текст***
---------------------------------------------
 зачеркнутый: ~~текст~~
```
курсивом (наклонным): _текст_ || *текст*

жирным шрифтом:      __текст__ || **текст**

жирным курсивом:   ___текст___ || ***текст***

зачеркнутый: ~~текст~~

---
## Списки:
### Простые:
#### Маркированный список.
```js
- Пункт списка.
+ Пункт списка.
* Пункт списка.

Обозначение может быть любым из трёх представленных
 * или - или +
```
- Пункт списка.
+ Пункт списка.
* Пункт списка.

#### Нумерованный список:
  ```js
 5. Пункт списка.
 1. Пункт списка.
 3. Пункт списка.

  Специально представлены цифры не по порядку,
для отображения того, что нумерация всё равно будет
идти по порядку и если счет начинается с 5 пункта,
то следующим будет 6 и так далее.

  ```
  5. Пункт списка.
  1. Пункт списка.
  3. Пункт списка.

### Вложенные:

#### Вложенный маркерованный в нумерованный:

```js
1. Пункт списка
    * Подпункт списка
    * Подпункт списка
2. Пункт списка
```

1. Пункт списка
    * Подпункт списка
    * Подпункт списка
2. Пункт списка

#### Вложенный нумерованный в маркированный:

```js
- Пункт списка
    5. Подпункт списка
    1. Подпункт списка
- Пункт списка
```
- Пункт списка
    3. Подпункт списка
    6. Подпункт списка
- Пункт списка

## Таблицы

#### Таблица может конструироваться двумя способами:

  1. Разметкой:
        | заголовок 1 | заголовок 2 |
        | ----------- | ----------- |
        | Ячейка 1.1  | Ячейка 2.1  |
        | Ячейка 1.2  | Ячейка 2.2  |

    ```js
      | заголовок 1 | заголовок 2 |
      | ----------- | ----------- |
      | Ячейка 1.1  | Ячейка 2.1  |
      | Ячейка 1.2  | Ячейка 2.2  |
    ```

  2. C преминением HTML:

  <table>
      <tr>
          <th><center>Заголовок 1</center></th>
          <th><center>Заголовок 2</center></th>
      </tr>
      <tr>
          <td><center>Ячейка 1.1</center></td>
          <td><center>Ячейка 2.1</center></td>
      </tr>
      <tr>
          <td><center>Ячейка 1.2</center></td>
          <td><center>Ячейка 2.2</center></td>
      </tr>
  </table>

    ```HTML
        <table>
            <tr>
                <th><center>Заголовок 1</center></th>
                <th><center>Заголовок 2</center></th>
            </tr>
            <tr>
                <td><center>Ячейка 1.1</td>
                <td><center>Ячейка 2.1</td>
            </tr>
            <tr>
                <td><center>Ячейка 1.2</td>
                <td><center>Ячейка 2.2</td>
            </tr>
        </table>
    ```
---

## Чек-листы:

```js
- [x] Задача 1 для отмеченного
- [ ] Задача 2 для не отмеченного
```
- [x] Задача 1 для отмеченного
- [ ] Задача 2 для не отмеченного

---

## Уровни цитирования:

 ```c
 > Первый уровень
 >> Второй уровень
 >>> Третий уровень
 ```
 > Пример отображени первого уровня

 >> Пример отображения второго уровня

 >>> Пример отображения третьего уровня

 ---

## Ссылки:

### Ссылка внутреннего перехода:

`[Перейти в аголовоки](#заголовки)`
[Перейти в заголовоки](#заголовки)
  или
`[Перейти к таблицам](#таблицы)`
[Перейти к таблицам](#таблицы)

### Внешние ссылки:

`[Текст ссылки](https://github.com/Mikhail-Ya/homeWorkSlonit)`
[Текст ссылки](https://github.com/Mikhail-Ya/homeWorkSlonit)
 или
`[Текст ссылки](deff696@gmail.com)`  
[Текст ссылки](deff696@gmail.com)

### Автоматические ссылки:

- `<https://github.com/Mikhail-Ya/homeWorkSlonit>`
    <https://github.com/Mikhail-Ya/homeWorkSlonit>
- `<deff696@gmail.com>`  
    <deff696@gmail.com>

---

## Изображения:

`![Текст описания](Ссылка)`

![Зимняя река](https://cdn.culture.ru/images/7ee4f633-0d5e-5b73-87a4-2085e5dbd1b8)
---
---