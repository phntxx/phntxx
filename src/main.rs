use std::env::var;
use log::info;
use lazy_static::lazy_static;

mod webserver;

lazy_static! {
    static ref ADDRESS: String = var("ADDRESS").unwrap();
}

fn main() {
    env_logger::init();

    info!("Starting...");
    webserver::run(&ADDRESS);
}