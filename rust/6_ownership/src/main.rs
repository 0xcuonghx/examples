fn main() {
    // let s1 = String::from("hello");
    // s1 ---> String::from("hello")

    // let s2 = s1; // borrow from s1
    // println!("{s1}") // error
    // s1 ----->
    // s2 -----> String::from("hello")

    // let s2 = s1.clone();
    // println!("{s1}") // not error
    // s1 -----> String::from("hello")
    // s2 -----> String::from("hello")

    // println!("{s1}") // not error
    // let s2 = &s1;
    // println!("{s1}")  // not error
    // s2 -----> s1 -----> String::from("hello")

    // let reference_to_nothing = dangle();
    //  println!("{reference_to_nothing}")  // error
    // reference_to_nothing --> s -> already `drop`
}

fn dangle() -> &String {
    let s = String::from("hello");

    &s
} // drop` s
