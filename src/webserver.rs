use gotham::{
    router::{builder::*, Router}
};

use log::{info, warn};

fn router() -> Router {

    build_simple_router(|route| {
        route.get("/").to_file("./data/index.html");
        route.get("/static/*").to_dir("./data/static");
    })
}

pub fn run(address: &'static str) {
    let result = gotham::start(address, router());

    match result {
        Ok(_msg) => info!("Webserver started successfully"),
        Err(_msg) => warn!("Error starting web server")
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use gotham::test::TestServer;
    use gotham::hyper::StatusCode;

    fn generate_test_server() -> TestServer {
        let state: Arc<Mutex<Config>> = Arc::new(Mutex::new(Config::new()));
        let test_server = TestServer::new(router(template_file, static_path, state)).unwrap();

        return test_server;
    }

    #[test]
    fn index_get() {
        let test_server = generate_test_server();
        let response = test_server
            .client()
            .get("http://localhost")
            .perform()
            .unwrap();

        assert_eq!(response.status(), StatusCode::OK);
    }

    #[test]
    fn static_get() {
        let test_server = generate_test_server();
        let response = test_server
            .client()
            .get("http://localhost/static/.gitkeep")
            .perform()
            .unwrap();

        assert_eq!(response.status(), StatusCode::OK);
    }

    #[test]
    fn static_test_get() {
        let test_server = generate_test_server();
        let response = test_server
            .client()
            .get("http://localhost/static/test.png")
            .perform()
            .unwrap();

        assert_eq!(response.status(), StatusCode::NOT_FOUND);
    }

    #[test]
    fn get_template() {
        let template_file = "./data/template.hbs";
        let state: Arc<Mutex<Config>> = Arc::new(Mutex::new(Config::new()));

        let template = generate_template(template_file, state);

        let result =  match template {
            Ok(_ok) => 0,
            Err(_err) => 1
        };

        assert_eq!(result, 0);
    }

    #[test]
    fn get_template_fail() {
        let template_file = "./data/fail.hbs";
        let state: Arc<Mutex<Config>> = Arc::new(Mutex::new(Config::new()));

        let template = generate_template(template_file, state);

        let result =  match template {
            Ok(_ok) => 0,
            Err(_err) => 1
        };

        assert_eq!(result, 1);
    }
}