use std::env::var;
use log::{info, warn};

use gotham::{
    router::{builder::*, Router}
};

use lazy_static::lazy_static;

lazy_static! {
    static ref ADDRESS: String = var("ADDRESS").unwrap();
}

fn router() -> Router {
    build_simple_router(|route| {
        route.get("/").to_file("./docs/index.html");
        route.get("/static/*").to_dir("./docs/static");
        route.get("/css/*").to_dir("./docs/css");
    })
}

fn serve(address: &'static str) {
    let result = gotham::start(address, router());

    match result {
        Ok(_msg) => info!("Webserver started successfully"),
        Err(_msg) => warn!("Error starting web server")
    }
}

fn main() {
    env_logger::init();

    info!("Starting...");
    serve(&ADDRESS);
}

#[cfg(test)]
mod tests {
    use super::router;
    use gotham::test::TestServer;
    use gotham::hyper::StatusCode;

    #[test]
    fn index_get() {
        let test_server = TestServer::new(router()).unwrap();
        let response = test_server
            .client()
            .get("http://localhost/")
            .perform()
            .unwrap();

        assert_eq!(response.status(), StatusCode::OK);
    }

    #[test]
    fn static_get() {
        let test_server = TestServer::new(router()).unwrap();
        let response = test_server
            .client()
            .get("http://localhost/static/font/")
            .perform()
            .unwrap();

        assert_eq!(response.status(), StatusCode::OK);
    }

    #[test]
    fn static_test_get() {
        let test_server = TestServer::new(router()).unwrap();
        let response = test_server
            .client()
            .get("http://localhost/static/test.png")
            .perform()
            .unwrap();

        assert_eq!(response.status(), StatusCode::NOT_FOUND);
    }
}