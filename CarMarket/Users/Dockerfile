FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 4002

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["Users/Users.csproj", "Users/"]
RUN dotnet restore "Users/Users.csproj"
COPY . .
WORKDIR "/src/Users"
RUN dotnet build "Users.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Users.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Users.dll"]