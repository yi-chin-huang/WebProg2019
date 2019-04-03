# Practice04 Peer Review

1. Completeness:
> 90%（baseline，有些bug）

<br>

2. Code Quality:
> 雖然看得出整體的脈絡，但我覺得有些架構可以適當做修改，會讓整體結構看起來更清楚。比方說減少重複、試圖增加可讀性等等。
> 
> #### (一)
> 減少重複的部分，舉個例子，像是在 checkItem() 這個函數裡面，你可以讓它吃 Item 的 id 作為參數傳入，利用這個 id 就可以從 todoArr 裡面找到 isComplete 來判斷，就不用在 Item 裡面多一個重複的 props 叫做 checked 了。
> 
> 要怎麼讓 checkItem() 吃參數，可以在 addItem() 的時候這樣寫：
> 
> `check={()=>this.checkItem(this.idCnt)}`
> 
> 然後 checkItem 那裡，其實你原本就有吃一個 e ，當作 arrow function 的輸入參數了，只是你沒有用到，為了語意上更好理解，配合上面，可以寫成 
> 
> `checkItem = (id) => { /* do something about id */ }`
> 
> 這樣也不需要再重新創一個 Itemnode，而只要改變 isComplete 的狀態就好了。或者乾脆反過來，不要 isComplete，保留 checked 就好了，在你的架構下這樣好像比較簡單，反正做法都類似。
> 
> 順帶一提，我發現你有些函數吃了輸入後都沒有用到，最常出現的例子像是 setState，裡面寫那個 (state) 的原因，還有它代表什麼意思，我覺得可以思考一下（老師的投影片應該有），在你的寫法裡，那些 state 其實都可以拿掉的。
> 
> 類似的多餘的程式碼，再舉一個我有看到的，比方說 TodoList 這個 class 其實不用 constrctor，那一段就可以不用寫。
>
> 反正簡單來說啦，只要出現一段重複的 code，或是某段感覺沒有在做事的 code，就可以想一下是不是可以拿掉或做修改，如果要修改，是不是要把哪些 props 之類的東西提到上面去，怎麼改會讓程式最精簡，或是最好讀，我覺得這滿值得思考的。 

> #### (二)
> 在 export 的時候，如果你只有要 export 一個 class，最好將那個 class 的名字跟該檔案的名字一樣，比方說 list.js 裡面的 class 名字就取成 list，或使反過來將檔名設為 TodoList 也可以，但盡量不要不一樣（大小寫也最好一致），這樣可以讓可讀性增加不少。
> 
> 或是最簡單的辦法，就用老師上課講的 functional component（像你的 input.js 就是個很好的例子），這樣 export 的名字自然就會跟檔名一樣了。

<br>

3. Correctness:
> 我只有發現這兩個 bugs，不過我沒有仔細研究要怎麼 debug，這可能要交給你自己解決了:sweat_smile::sweat_smile:
> - 點擊完成之後，字體變灰色加刪除線的功能無效。
> - 完成按鈕的綠色顯示不正確（測試：先輸入兩個項目分別叫 1 和 2，將 1 設為完成後，2 也會顯示完成的狀態）。

<br>

4. Other Suggestions:
> 看得出你應該花了滿多時間（是嗎？）註解的地方應該是你原本嘗試的寫法之類的？我覺得這份 code 是完整的，讀起來也還算順，只是就像上面說的，有些地方的可以再更精簡一點，這樣看起來會更棒，加油！！