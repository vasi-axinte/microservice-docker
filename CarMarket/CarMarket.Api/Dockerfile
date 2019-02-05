FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 7000
EXPOSE 22

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["CarMarket.Api/CarMarket.Api.csproj", "CarMarket.Api/"]
RUN dotnet restore "CarMarket.Api/CarMarket.Api.csproj"
COPY . .
WORKDIR "/src/CarMarket.Api"
RUN dotnet build "CarMarket.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "CarMarket.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "CarMarket.Api.dll"]