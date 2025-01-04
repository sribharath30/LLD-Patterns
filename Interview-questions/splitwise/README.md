Classes:
    - user 
    - group 
    - transaction
    - expense
    - split strategy
        - percentage stratgey 
        - equal split strategy
        - exact split strategy
    - System



    User 
        - id, name, balance, email etc
    group
        - id, name, desc, User[], Expense[];
    transaction
        - id, date, sender, receiver, amount;
    expense
        - id, amount, date, author, Split[]
    split
        - amount, user
        ------> percentage, exact, equal