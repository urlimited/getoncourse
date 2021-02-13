@extends('template.layouts.wrapper')

@section('content')

    <div class="home-btn d-none d-sm-block"><a class="text-dark" href="/"><i class="bx bx-home h2"></i></a></div>
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="justify-content-center row">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="overflow-hidden card">
                        <div class="bg-soft-primary">
                            <div class="row">
                                <div class="col-7 col">
                                    <div class="text-primary p-4"><h5 class="text-primary">Welcome Back !</h5>
                                        <p>Sign in to continue to Skote.</p></div>
                                </div>
                                <div class="col-5 align-self-end col"></div>
                            </div>
                        </div>
                        <div class="pt-0 card-body">
                            <div><a href="/">
                                    <div class="avatar-md profile-user-wid mb-4"><span
                                            class="avatar-title rounded-circle bg-light"></span></div>
                                </a></div>
                            <div class="p-2">
                                <form novalidate="" action="#" method="get" class="form-horizontal av-invalid">
                                    <div class="form-group">
                                        <div class="form-group"><label for="username" class="">Username</label><input
                                                name="username" placeholder="Enter username" required="" id="username"
                                                type="text"
                                                class="form-control is-untouched is-pristine av-invalid form-control"
                                                value=""></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group"><label for="password" class="">Password</label><input
                                                name="password" required="" placeholder="Enter password" id="password"
                                                type="password" class="is-untouched is-pristine av-invalid form-control"
                                                value=""></div>
                                    </div>
                                    <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                       class="custom-control-input"
                                                                                       id="customControlInline"><label
                                            class="custom-control-label" for="customControlInline">Remember me</label>
                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-primary btn-block waves-effect waves-light"
                                                type="submit">Log
                                            In
                                        </button>
                                    </div>
                                    <div class="mt-4 text-center"><h5 class="font-size-14 mb-3">Sign in with</h5>
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><a
                                                    class="social-list-item bg-primary text-white border-primary"
                                                    href="#"><i class="mdi mdi-facebook"></i></a></li>
                                            <li class="list-inline-item"><a
                                                    class="social-list-item bg-info text-white border-info"
                                                    href="#"><i class="mdi mdi-twitter"></i></a></li>
                                            <li class="list-inline-item"><a
                                                    class="social-list-item bg-danger text-white border-danger"
                                                    href="#"><i class="mdi mdi-google"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="mt-4 text-center"><a class="text-muted" href="#"><i
                                                class="mdi mdi-lock mr-1"></i> Forgot your password?</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center"><p>Don't have an account ? <a class="font-weight-medium text-primary"
                                                                                href="#"> Signup now </a>
                        </p>
                        <p>© 2021 Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p></div>
                </div>
            </div>
        </div>
    </div>

@endsection()
