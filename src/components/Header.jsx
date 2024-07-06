import profile from "../assets/img/profileOnes.jpeg";
export function Header() {
	return (
		<>
			{/* Header Start */}
			<div className="container-fluid  my-6 mt-0" id="home">
				<div className="container">
					<div className="row g-5 align-items-center">
						<div className="col-lg-6 py-6 pb-0 pt-lg-0">
							<h3 className="text-primary mb-3">I&apos; m</h3>
							<h1 className="display-3 mb-3">Ones Ben Rhaime</h1>
							<h2 className="typed-text-output d-inline" />
							<div className="typed-text d-none">
								Web Developer, FrontEnd Developer,
							</div>
							<div className="d-flex align-items-center pt-5">
								<a href className="btn btn-primary py-3 px-4 me-5">
									Download CV
								</a>
								<button
									type="button"
									className="btn-play"
									data-bs-toggle="modal"
									data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
									data-bs-target="#videoModal"
								>
									<span />
								</button>
								<h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
							</div>
						</div>
						<div className="col-lg-6">
							<img className="img-fluid" src={profile} alt />
						</div>
					</div>
				</div>
			</div>
			{/* Header End */}
		</>
	);
}
