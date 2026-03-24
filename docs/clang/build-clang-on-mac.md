# macOS 构建 clang

https://clang.llvm.org/get_started.html

## 1 参数们

### 1.1 核心参数

```shell
-DLLVM_ENABLE_PROJECTS="clang"
-DLLVM_ENABLE_PROJECTS="clang;lld"

-DLLVM_ENABLE_RUNTIMES="libcxx;libcxxabi;libunwind;compiler-rt"

-DLLVM_TARGETS_TO_BUILD=all
-DLLVM_TARGETS_TO_BUILD=host

-DCMAKE_BUILD_TYPE=Release

-DLLVM_USE_LINKER=lld

-G "Unix Makefiles" ../llvm
```

### 1.2 系统配置

```shell
-DCMAKE_OSX_SYSROOT="/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk"
-DCMAKE_OSX_SYSROOT="/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk"

-DCMAKE_INSTALL_RPATH="@executable_path/../lib"

-DCMAKE_C_COMPILER=$HOME/Applications/llvm22/stage-2/bin/clang
-DCMAKE_CXX_COMPILER=$HOME/Applications/llvm22/stage-2/bin/clang++

-DCMAKE_CXX_STANDARD=17
```

### 1.3 安装位置

```shell
-DCMAKE_INSTALL_PREFIX=$HOME/Applications/llvm22/stage-2
```

### 1.4 功能开关

```shell
-DLLVM_ENABLE_THREADS=OFF
-DLLVM_ENABLE_WERROR=OFF
-DLLVM_BUILD_BENCHMARKS=OFF
-DLLVM_INCLUDE_BENCHMARKS=OFF
```

### 1.5 修改编译时使用的 libc++

```shell
-DLLVM_ENABLE_LIBCXX=ON
-DLLVM_STATIC_LINK_CXX_STDLIB=ON

-DCMAKE_INSTALL_RPATH="@loader_path/../lib"
-DCMAKE_INSTALL_RPATH_USE_LINK_PATH=OFF
-DCMAKE_BUILD_WITH_INSTALL_RPATH=OFF
```

```shell
-DCMAKE_CXX_FLAGS="-nostdinc++ -isystem $HOME/Applications/llvm20/stage-2/include/c++/v1" \
-DCMAKE_EXE_LINKER_FLAGS="-nostdlib++ -L $HOME/Applications/llvm20/stage-2/lib -lc++ -Wl,-rpath,$HOME/Applications/llvm20/stage-2/lib" \
-DCMAKE_SHARED_LINKER_FLAGS="-nostdlib++ -L $HOME/Applications/llvm20/stage-2/lib -lc++ -Wl,-rpath,$HOME/Applications/llvm20/stage-2/lib" \
```

### 1.6 Using the just-built libc++

```shell
clang++ -nostdinc++ -isystem <install>/include/c++/v1 \
          -nostdlib++ -L <install>/lib -lc++            \
          -Wl,-rpath,<install>/lib                      \
          test.cpp
```

```shell
clang++ -nostdinc++ -isystem <install>/include/c++/v1           \
          -nostdlib++ -L <install>/lib -lc++ -lc++abi -lunwind  \
          -Wl,-rpath,<install>/lib                              \
          test.cpp
```

## 2 组合起来

### 2.1 stage-1

```shell
cmake \
-DCMAKE_OSX_SYSROOT="/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk" \
-DCMAKE_C_COMPILER=/usr/bin/clang \
-DCMAKE_CXX_COMPILER=/usr/bin/clang++ \
-DLLVM_ENABLE_PROJECTS="clang" \
-DLLVM_ENABLE_RUNTIMES="libcxx;libcxxabi;libunwind;compiler-rt" \
-DLLVM_TARGETS_TO_BUILD=host \
-DCMAKE_BUILD_TYPE=Release \
-DCMAKE_INSTALL_PREFIX=$HOME/Applications/llvm20/stage-1 \
-G "Unix Makefiles" ../llvm
```

### 2.2 stage-2

```shell
cmake \
-DCMAKE_OSX_SYSROOT="/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk" \
-DCMAKE_C_COMPILER=$HOME/Applications/llvm20/stage-1/bin/clang \
-DCMAKE_CXX_COMPILER=$HOME/Applications/llvm20/stage-1/bin/clang++ \
-DCMAKE_INSTALL_RPATH="@loader_path/../lib" \
-DCMAKE_INSTALL_RPATH_USE_LINK_PATH=OFF \
-DCMAKE_BUILD_WITH_INSTALL_RPATH=OFF \
-DLLVM_ENABLE_PROJECTS="clang" \
-DLLVM_ENABLE_RUNTIMES="libcxx;libcxxabi;libunwind;compiler-rt" \
-DLLVM_TARGETS_TO_BUILD=host \
-DCMAKE_BUILD_TYPE=Release \
-DLLVM_ENABLE_LIBCXX=ON \
-G "Unix Makefiles" ../llvm
```

### 2.3 stage-3

```shell
cmake \
-DCMAKE_OSX_SYSROOT="/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk" \
-DCMAKE_C_COMPILER=/usr/local/bin/clang \
-DCMAKE_CXX_COMPILER=/usr/local/bin/clang++ \
-DCMAKE_INSTALL_RPATH="@loader_path/../lib" \
-DCMAKE_INSTALL_RPATH_USE_LINK_PATH=OFF \
-DCMAKE_BUILD_WITH_INSTALL_RPATH=OFF \
-DLLVM_ENABLE_PROJECTS="clang" \
-DLLVM_ENABLE_RUNTIMES="libcxx;libcxxabi;libunwind;compiler-rt" \
-DLLVM_TARGETS_TO_BUILD=host \
-DCMAKE_BUILD_TYPE=Release \
-DLLVM_ENABLE_LIBCXX=ON \
-G "Unix Makefiles" ../llvm
```
