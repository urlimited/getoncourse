@extends('template.layouts.wrapper')

@section('content')
    <div class="home-btn d-none d-sm-block"><a class="text-dark" href="/"><i class="bx bx-home h2"></i></a></div>
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="justify-content-center row">
                <div class="col-md-8 col-lg-8 col-xl-5">
                    <div class="overflow-hidden card">
                        <div class="bg-soft-primary">
                            <div class="row">
                                <div class="col-7 col">
                                    <div class="text-primary p-4"><h5 class="text-primary">Free Register</h5>
                                        <p>Get your free Skote account now.</p></div>
                                </div>
                                <div class="col-5 align-self-end col"><img src="/static/media/profile-img.43b59e59.png"
                                                                           alt="" class="img-fluid"></div>
                            </div>
                        </div>
                        <div class="pt-0 card-body">
                            <div><a href="/">
                                    <div class="avatar-md profile-user-wid mb-4"><span
                                            class="avatar-title rounded-circle bg-light"><img
                                                src="/static/media/logo.a0143fa8.svg" alt="" class="rounded-circle"
                                                height="34"></span></div>
                                </a></div>
                            <div class="p-2">
                                <form novalidate="" action="#" method="get" class="form-horizontal av-invalid">
                                    <div class="form-group">
                                        <div class="form-group"><label for="email" class="">Email</label><input
                                                name="email" placeholder="Enter email" required="" id="email"
                                                type="email"
                                                class="form-control is-untouched is-pristine av-invalid form-control"
                                                value=""></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group"><label for="username" class="">Username</label><input
                                                name="username" required="" placeholder="Enter username" id="username"
                                                type="text" class="is-untouched is-pristine av-invalid form-control"
                                                value=""></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group"><label for="password" class="">Password</label><input
                                                name="password" required="" placeholder="Enter password" id="password"
                                                type="password" class="is-untouched is-pristine av-invalid form-control"
                                                value=""></div>
                                    </div>
                                    <div class="mt-4">
                                        <button class="btn btn-primary btn-block waves-effect waves-light"
                                                type="submit">Register
                                        </button>
                                    </div>
                                    <div class="mt-4 text-center"><h5 class="font-size-14 mb-3">Sign up using</h5>
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><a
                                                    class="social-list-item bg-primary text-white border-primary"
                                                    href="/pages-register"><i class="mdi mdi-facebook"></i></a></li>
                                            <li class="list-inline-item"><a
                                                    class="social-list-item bg-danger text-white border-danger"
                                                    href="/pages-register"><i class="mdi mdi-google"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="mt-4 text-center"><p class="mb-0">By registering you agree to the Skote
                                            <a class="text-primary" href="/pages-register">Terms of Use</a></p></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center"><p>Already have an account ? <a
                                class="font-weight-medium text-primary" href="/pages-login"> Login</a></p>
                        <p>© 2021 Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p></div>
                </div>
            </div>
        </div>
    </div>
@endsection()
